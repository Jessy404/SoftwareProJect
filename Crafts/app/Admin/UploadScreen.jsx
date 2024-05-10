import React, { useState } from 'react';
import { View, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UploadImageToFirebase = () => {
  const [imageUri, setImageUri] = useState(null);

  const selectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Sorry, we need camera roll permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      const { uri } = result;
      const fileName = uri.split('/').pop();
      const response = await fetch(uri);
      const blob = await response.blob();
      const storageRef = firebase.storage().ref().child(`images/${fileName}`);

      try {
        await storageRef.put(blob);
        const url = await storageRef.getDownloadURL();
        setImageUri(url);
      } catch (error) {
        console.error('Error uploading image: ', error);
        Alert.alert('Error', 'Failed to upload image');
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
      <Button title="Select Image" onPress={selectImage} />
    </View>
  );
};

export default UploadImageToFirebase;

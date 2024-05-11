import React, { useState } from 'react';
import { View, Button, Image, Alert, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyANLV2lWDs-xdskBuBx_eVLGNGk5fOpGcY",
  authDomain: "fire-aa783.firebaseapp.com",
  projectId: "fire-aa783",
  storageBucket: "fire-aa783.appspot.com",
  messagingSenderId: "632319750661",
  appId: "1:632319750661:web:bfde9866ee743ddbce626c",
  measurementId: "G-824KE9Y020"
};


const app = initializeApp(firebaseConfig); // Initialize Firebase app
const storage = getStorage(app); // Get Firebase Storage reference

const UploadImageToFirebase = () => {
  const [imageUri, setImageUri] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const selectImage = async () => {
    // Request media library permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'We need camera roll permissions to select images.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true, // Allow editing
      quality: 1, // High quality
    });

    if (result.cancelled) {
      // If the user cancels, do nothing
      return;
    }

    const { uri } = result; // Get the URI from the result
    if (!uri) {
      Alert.alert('Error', 'No image selected'); // Handle undefined URI
      return;
    }

    setImageUri(uri); // Store the image URI
    const fileName = uri.split('/').pop(); // Extract the file name
    const response = await fetch(uri); // Fetch the image data
    const blob = await response.blob(); // Convert to Blob for upload

    const storageRef = ref(storage, `images/${fileName}`); // Firebase Storage reference

    try {
      setIsUploading(true); // Start uploading
      await uploadBytes(storageRef, blob); // Upload to Firebase Storage
      const downloadURL = await getDownloadURL(storageRef); // Get download URL
      setImageUri(downloadURL); // Set the download URL as the new image URI
      setIsUploading(false); // Upload complete
    } catch (error) {
      console.error('Error uploading image:', error);
      Alert.alert('Error', 'Failed to upload image');
      setIsUploading(false); // Reset the upload status
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isUploading ? (
        <ActivityIndicator size="large" color="#0000FF" /> // Spinner during upload
      ) : (
        <>
          {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
          <Button title="Select Image" onPress={selectImage} />
        </>
      )}
    </View>
  );
};

export default UploadImageToFirebase;

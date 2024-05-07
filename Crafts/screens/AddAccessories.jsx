import React, { useState } from 'react';
import { View, TextInput, Alert, StyleSheet, Text, Pressable } from 'react-native';
import { db ,auth } from '../firebase/config';
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';
// import NavBar from '../components/NavBar/NavBar';
const AddProductForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [id, setId] = useState("")
    // const [imageUrl, setImage] = useState("")
    const handleAddProduct = async () => {
        try {
            await addDoc(collection(db, "Products"),
                {
                    name: name,
                    price: parseFloat(price),
                    id: id,
                    description: description,
                    
                }

            )

            Alert.alert('Success', 'Product added successfully');
        } catch (error) {
            console.error('Error adding product: ', error);
            Alert.alert('Error', 'Failed to add product. Please try again.');
        }
    };
    const getProduct = async () => {
        // if (uid)
        const docRef = doc(db, "products", auth.beforeAuthStateChanged);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          // console.log("Document data:", docSnap.data());
          const data = docSnap.data();
          setName(data.name);
          setEmail(data.email);
          setPhone(data.phone);
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      }

    return (
        <>
            <Text style={styles.title}>Add product </Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <View style={styles.inputView}>

                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="#10439F"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="id"
                    placeholderTextColor="#10439F"
                    value={id}
                    onChangeText={setId}
                />
                {/* <TextInput
                    style={styles.input}
                    placeholder="imageUrl"
                    placeholderTextColor="#10439F"
                    value={imageUrl}
                    onChangeText={setImage}
                /> */}
                <TextInput
                    style={styles.input}
                    placeholder="Price"
                    value={price}
                    onChangeText={setPrice}
                    placeholderTextColor="#10439F"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Description"
                    placeholderTextColor="#10439F"
                    value={description}
                    onChangeText={setDescription}
                />

                <View style={styles.buttonView}>
                    <Pressable style={styles.button} onPress={handleAddProduct}>
                        <Text style={styles.buttonText}>Add Product</Text>
                    </Pressable>
                </View>
                {/* <Button title="Add Product" onPress={handleAddProduct}  /> */}

            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sideBySide: {

        flexDirection: "row",
    },
    title: {
        alignItems: 'center',
        justifyContent: "center",
        fontSize: 40,
        fontWeight: 'bold',
        color: "#10439F",
        paddingHorizontal: 20,
        paddingTop: 40,
    },

    separator: {
        marginVertical: 30,
        height: 2,
        width: '80%',
    },
    inputView: {
        gap: 15,
        width: "100%",
        paddingHorizontal: 40,
        marginBottom: 5
    },
    input: {
        height: 50,
        paddingHorizontal: 20,
        borderColor: "#10439F",
        borderWidth: 1,
        borderRadius: 7
    },
    button: {
        marginTop: 40,
        marginBottom: 10,
        backgroundColor: "#10439F",
        height: 45,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 150,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    buttonView: {
        width: "100%",
        paddingHorizontal: 50
    },
});

export default AddProductForm;

import React, { useState } from 'react';
import { View, TextInput, Alert, StyleSheet, Text, Pressable } from 'react-native';
import { router } from 'expo-router';
import { db, auth } from '@/firebase/config';
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';
import { Dimensions } from 'react-native';
// import NavBar from '../components/NavBar/NavBar';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => (width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

const AddProductForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [id, setId] = useState("")
    // const [imageUrl, setImage] = useState("")
    const handleAddProduct = async () => {
        try {
            await addDoc(collection(db, "accessories"),
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
        < View style={styles.container}>

            <View style={styles.header}>
            <Pressable
                style={styles.BackButton}
                onPress={() => router.replace("/Account/adminHome")}
            >
                <Ionicons name="arrow-back" size={28} color="black" />
            </Pressable>
                <Text style={styles.title}>Add product </Text>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />


            <View style={styles.inputView}>

                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="#3A3535"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="id"
                    placeholderTextColor="#3A3535"
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
                    placeholderTextColor="#3A3535"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Description"
                    placeholderTextColor="#3A3535"
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
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        // paddingTop: 70,
        flex: 1,
        backgroundColor: '#F4F4F4',
    },
    sideBySide: {
        // position: 'relative',
        // justifyContent:'center',
        flexDirection: "row",
        backgroundColor: '#F4F4F4',
        // justifyContent: 'center',
        marginBottom: 60,

    },
    title: {
        // position: 'relative',
        // bottom: '10%',
        fontSize: moderateScale(28),
        fontWeight: 'bold',
        color: "#3A3535",

    },
    header: {
        flexDirection: 'row',
        // padding: 10,
        // gap: 20,
    },
    separator: {
        marginVertical: 30,
        height: 2,
        width: '80%',
    },
    BackButton: {
        padding: 10,
        position: 'absolute',
        right: '62%',
        // bottom: '10%',
        top :"10%"
    },
    inputView: {
        gap: 20,
        width: "100%",
        backgroundColor: '#F4F4F4',
        paddingHorizontal: 40,
        marginBottom: 5
    },
    input: {
        height: 50,
        paddingHorizontal: 20,
        borderColor: "#3A3535",
        borderWidth: 0.5,
        borderRadius: 20
    },

    button: {
        // position: 'relative',
        backgroundColor: "#FF7315",
        // top: '100%',
        width: width * 0.80,
        height: height * 0.04,
        // borderColor: "gray",
        // borderWidth: 1,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        // marginTop: 10,
        // marginBottom: 10 ,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    buttonView: {
        // width: "100%",
        paddingHorizontal: 50,
        backgroundColor: '#F4F4F4',
        justifyContent: "center",
        alignItems: "center",
    },

});

export default AddProductForm;

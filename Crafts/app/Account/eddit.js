import React, { useEffect, useState } from 'react';
import { View, TextInput, Alert, StyleSheet, Text, Pressable } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');
const scale = size => (width / 350) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

const Edit = () => {
    const router = useRouter();
    const { productId } = useLocalSearchParams(); 
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [id, setId] = useState("");

    useEffect(() => {
        const fetchProduct = async () => {
            const docRef = doc(db, 'products', productId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                setName(data.name);
                setDescription(data.description);
                setPrice(data.price.toString());
                setId(data.id);
            } else {
                Alert.alert("Error", "Product not found."); 
            }
        };

        fetchProduct();
    }, [productId]); 

    const handleUpdateProduct = async () => {
        try {
            const docRef = doc(db, 'products', productId); 
            await updateDoc(docRef, {
                name,
                description,
                price: parseFloat(price),  
            });

            Alert.alert('Success', 'Product updated successfully.');
            router.push('/'); 
        } catch (error) {
            console.error('Error updating product:', error);
            Alert.alert('Error', 'Failed to update product. Please try again.');
        }
    };

    const handleDeleteProduct = async () => {
        try {
            const docRef = doc(db, 'products', productId);
            await deleteDoc(docRef); 
    
            Alert.alert('Success', 'Product deleted successfully.');
            router.push('/'); 
        } catch (error) {
            console.error('Error deleting product:', error);
            Alert.alert('Error', 'Failed to delete product. Please try again.');
        }
    };
    
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.BackButton}
                onPress={() => router.back()} 
            >
                <Ionicons name="arrow-back" size={28} color="black" />
            </Pressable>

            <Text style={styles.title}>Edit Product</Text>
          

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
                    <Pressable style={styles.button} onPress={handleUpdateProduct}>
                        <Text style={styles.buttonText}>Update Product</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={handleDeleteProduct}>
                        <Text style={styles.buttonText}>Delete Product</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: moderateScale(28),
        fontWeight: 'bold',
        color: "#3A3535",
    },
    inputView: {
        gap: 20,
        width: '100%',
        paddingHorizontal: 40,
    },
    input: {
        height: 50,
        borderColor: "#3A3535",
        borderWidth: 0.5,
        borderRadius: 20,
        paddingHorizontal: 20,
    },
    BackButton: {
        padding: 10,
        position: 'absolute',
        left: 0,
        top: 10,
    },
    button: {
        backgroundColor: "#FF7315",
        width: width * 0.80,
        height: height * 0.04,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    buttonView: {
        paddingHorizontal: 50,
        justifyContent: 'center',
       alignItems:'center',
    },
});

export default Edit;
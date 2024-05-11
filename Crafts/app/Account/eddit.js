import React, { useEffect, useState } from 'react';
import { View, TextInput, Alert, StyleSheet, Text, Pressable, Button } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Dimensions } from 'react-native';

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
            const docRef = doc(db, 'accessories', productId);
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
            const docRef = doc(db, 'accessories', productId);
            await updateDoc(docRef, {
                name,
                description,
                price: parseFloat(price),
            });

            Alert.alert('Success', 'Product updated successfully.');
            router.push('/(tabs)/home'); 
        } catch (error) {
            console.error('Error updating product:', error);
            Alert.alert('Error', 'Failed to update product. Please try again.');
        }
    };

    const handleDeleteProduct = async () => {
        Alert.alert(
          'Are you sure you want to delete this product?',
            [
                {
                    text: 'cancel',
                    
                },
                {
                    text: 'delete',
                    
                    onPress: async () => {
                      try {
                        const docRef = doc(db, 'accessories', productId);
                        await deleteDoc(docRef); 
                        Alert.alert('Success', 'The product successfully deleted ');
                        router.push('/'); // 
                    } catch (error) {
                        console.error('Error deleting product:', error);
                        Alert.alert('Error','The system was unable to delete the product. Please try again');
                    }
                }
                },
            ],
            { cancelable: true }
        );
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
                    value={name}
                    onChangeText={setName}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Price"
                    value={price}
                    onChangeText={setPrice}
                    keyboardType="numeric"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Description"
                    value={description}
                    onChangeText={setDescription}
                />

                <View style={styles.buttonView}>
                    <Pressable style={styles.button} onPress={handleUpdateProduct}>
                        <Text style={styles.buttonText}>Update Product</Text>
                    </Pressable>

                    <Pressable
                        style={[styles.button, { backgroundColor: 'orange' }]}
                        onPress={handleDeleteProduct}
                    >
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
    buttonView: {
        paddingHorizontal: 50,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    button: {
        backgroundColor: "#FF7315",
        width: width * 0.80,
        height: height * 0.04,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default Edit;
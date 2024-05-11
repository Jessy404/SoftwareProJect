import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategrioes, selectMyCategories, setCredentials } from '@/Store/Categories/CategoriesSlice';
import VideoCard from '../VideoCard';
import { Dimensions, PixelRatio } from 'react-native';
import { router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';


const { width, height } = Dimensions.get('window');
// Function to scale the size based on the screen width
const scaleSize = (size) => (width / 375) * size;

// Function to scale the font size based on the screen width
const scaleFont = (size) => size * PixelRatio.getFontScale();



export default function BB() {
  const value = useSelector(selectMyCategories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategrioes())
  }, [dispatch]);

  // Function to render items conditionally based on index
  const renderItem = ({ item, index }) => {
    // Check if the current item is the one at index 1
    
    if (index === 1) {

      return (
        <View style={styles.productContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image1 }} style={styles.productImage} />
        <Image source={{ uri: item.image2 }} style={styles.productImage} />
        <Image source={{ uri: item.image3 }} style={styles.productImage2} />
        <Image source={{ uri: item.image4 }} style={styles.productImage2} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </View>

      );
    }
    
   
    
  };

  return (
    <>
    <Pressable
          style={styles.BackButton}
          onPress={() => router.replace("/(tabs)/home")}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
    <FlatList
    showsVerticalScrollIndicator
    marginVertical
    verticall
    data={value}
    renderItem={renderItem}
    keyExtractor={(item, index) => index.toString()}
    style={{ backgroundColor: '#f0f0f0' }}
  />
  <TouchableOpacity
        onPress={() => console.log('Button Pressed')}
        style={styles.fullWidthButton}>
        <Text style={styles.buttonText}>Add To Cart</Text>
      </TouchableOpacity>
  </>
  );
}
const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    width: '100%', // Set width to 100%
    // height:'100%'
  },
  imageContainer: {
    flexDirection: 'row', // Arrange images in a row
    justifyContent: 'center', // Center images horizontally
    flexWrap: 'wrap', // Allow items to wrap to the next line
    justifyContent: 'space-between', // Distribute extra space evenly
    paddingHorizontal: scaleSize(10), // Add horizontal padding
  },
  productImage: {
    width: scaleSize(355), 
    height: scaleSize(250), 
    borderRadius: 10,
    marginBottom: scaleSize(10), 
  },
  title: {
    fontSize: scaleFont(18), 
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  description: {
    fontSize: scaleFont(14),
    color: '#666',
    marginVertical: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: scaleFont(16),
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  fullWidthButton: {
    backgroundColor: '#FF7315',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Set width to 100% of the screen
  },
  buttonText: {
    color: '#F4F4F4',
    fontSize: scaleFont(18),
    fontWeight: 'bold',
  },
  BackButton: {
    padding: 10,
    position: 'absolute',
    right: '42%',
    bottom: '25%',
  },
});

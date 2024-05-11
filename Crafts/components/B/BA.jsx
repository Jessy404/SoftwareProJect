import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategrioes, selectMyCategories, setCredentials } from '@/Store/Categories/CategoriesSlice';
import VideoCard from '../VideoCard';



export default function BA() {
  const value = useSelector(selectMyCategories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategrioes())
  }, [dispatch]);

  // Function to render items conditionally based on index
  const renderItem = ({ item, index }) => {
    // Check if the current item is the one at index 1
    if (index === 0) {

      return (
        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
          <Text>{item.description}</Text>
          <Text style={{ fontSize: 16, color: 'green' }}>${item.price}</Text>
          <FlatList
            data={[item.image1, item.image2, item.image3, item.image4]}
            renderItem={({ item: image }) => (
              <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
            )}
            keyExtractor={(image, idx) => idx.toString()}
            horizontal
          />
        </View>

      );
    }
  };

  return (
    <FlatList
      data={value}
      renderItem={renderItem}
    />
  );
}

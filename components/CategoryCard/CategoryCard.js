// CategoryCard.js
import React from 'react';
import { Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CategoryCard = ({ style, imageSource, children }) => {
  return (
    <TouchableOpacity style={[styles.card, style]}>
      <Image source={imageSource} style={styles.image} />
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    marginHorizontal: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
});

export default CategoryCard;

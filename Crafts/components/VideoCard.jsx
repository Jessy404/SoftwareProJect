import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { icons } from '../constants';

const ProductCard = ({ title, price, thumbnail }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: thumbnail }}
          style={styles.thumbnail}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.price} numberOfLines={1}>
            ${price}
          </Text>
        </View>
        <Image source={icons.menu} style={styles.menuIcon} />
      </View>

      <TouchableOpacity style={styles.imageContainer}>
        <Image
          source={{ uri: thumbnail }}
          style={styles.fullImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 56,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  thumbnail: {
    width: 46,
    height: 46,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    color: '#3A3535',
  },
  price: {
    fontSize: 14,
    color: '#3A3535',
    fontWeight: '400',
  },
  menuIcon: {
    width: 20,
    height: 20,
  },
  imageContainer: {
    width: '100%',
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    overflow: 'hidden',
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
});

export default ProductCard;

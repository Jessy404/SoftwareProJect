import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');
const scale = (size) => (width / 350) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

// Simulated product data
const products = {
  '1': {
    id: '1',
    name: 'TEXTURED DROP EARRINGS',
    price: 'EGP 220.00',
    additionalImages: [
      'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw6dffdebf/images/large/01_30105460021_1.jpg?sw=663&sh=848&sm=cut',
      'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwf43f6b13/images/large/05_30105460021_5.jpg?sw=663&sh=848&sm=cut',
    ],
    description: 'Beautiful textured drop earrings perfect for any occasion.',
    rating: 3,
  },
  '2': {
    id: '2',
    name: 'MATTE OVAL EARRINGS',
    price: 'EGP 185.00',
    // mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw6c9d4ae9/images/large/02_30103170008_2.jpg?sw=663&sh=848&sm=cut',
    additionalImages: [
        'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw3d328a7c/images/large/01_30103170008_1.jpg?sw=663&sh=848&sm=cut',
        'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwea97f116/images/large/05_30103170008_5.jpg?sw=663&sh=848&sm=cut',
    ],


    description: 'MATTE OVAL EARRINGS',
    rating: 4,
},
'3': {
    id: '3',
    name: 'INLAY HOOP EARRINGS',
    price: 'EGP 230.00',
    // mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwf0e21880/images/large/03_30105430004_2.jpg?sw=663&sh=848&sm=cut',
    additionalImages: [
        'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwccc104e1/images/large/05_30105430004_5.jpg?sw=1920&sh=2460&sm=cut',
        'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw1b393395/images/large/01_30105430004_1.jpg?sw=663&sh=848&sm=cut',
    ],
    description: 'MOTHER OF PEARL INLAY HOOP EARRINGS',
    rating: 1,
},
'4': {
    id: '4',
    name: '2-PACK SEED BEAD RINGS GOLD',
    price: 'EGP 320.00',
    // mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dweaa8489c/images/large/01_30108020021_1.jpg?sw=663&sh=848&sm=cut',
    additionalImages: [
        'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw9bd2ce5b/images/large/02_30108020021_2.jpg?sw=663&sh=848&sm=cut',
        'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw3a936ffe/images/large/05_30108020021_5.jpg?sw=663&sh=848&sm=cut',
    ],
    description: 'Ring stacks deserve a bit of colour too, so opt for this duo to brighten things up. Designed in gold-tone metal, theyre designed with red and blue seed beading on a wavy ring profile. Two included. Gold',
    rating: 5,
},
'5': {
    id: '5',
    name: '3-PACK MOLTEN STUDS',
    price: 'EGP 230.00',
    // mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw59e292ee/images/large/02_30105540008_2.jpg?sw=663&sh=848&sm=cut',
    additionalImages: [
        'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwed021d96/images/large/01_30105540008_1.jpg?sw=663&sh=848&sm=cut',
        'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw73a593fb/images/large/05_30105540008_5.jpg?sw=663&sh=848&sm=cut',
    ],
    description: 'Set in molten gold-tone metal, these studs display twinkly, faceted stones in oceanic hues. Just add sunshineNon-refundable.',
    rating: 3,
},
'6': {
    id: '6',
    name: 'MOLTEN DROP EARRINGS',
    price: 'EGP 185.00',
    // mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwc75119c8/images/large/01_30108050021_1.jpg?sw=663&sh=848&sm=cut',
    additionalImages: [
        'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw85570527/images/large/03_30108050021_2.jpg?sw=663&sh=848&sm=cut',
        'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwb74475df/images/large/05_30108050021_5.jpg?sw=663&sh=848&sm=cut',
    ],
    description: 'Mesmerising molten cascades from these earrings, designed in gold-tone metal. Tuck your hair behind your ears to show them off Non-refundable',
    rating: 4,
},
'7': {
    id: '7',
    name: 'LEAF DROP ANKLET',
    price: 'EGP 140.00',
    // mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw403ddfec/images/large/01_30100360008_1.jpg?sw=663&sh=848&sm=cut',
    additionalImages: [
        'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw8df0cebd/images/large/03_30100360008_2.jpg?sw=663&sh=848&sm=cut',
        'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw53e481d7/images/large/05_30100360008_5.jpg?sw=663&sh=848&sm=cut',
    ],
    description: ' Which way to the beach? Stationed with leafy charms green beads, this anklet is designed in shiny gold-tone metal.',
    rating: 5,
},
'8': {
    id: '8',
    name: 'RESIN INLAY DROP EARRINGS',
    price: 'EGP 250.00',
    // mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw56ecb162/images/large/01_30105410008_1.jpg?sw=663&sh=848&sm=cut',
    additionalImages: [
        'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw5eabf6c1/images/large/03_30105410008_2.jpg?sw=663&sh=848&sm=cut',
        'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw3051c037/images/large/05_30105410008_5.jpg?sw=663&sh=848&sm=cut',
    ],
}
};

const ProductDetail = () => {
  const { id } = useLocalSearchParams(); // Retrieve the product ID from the route parameters
  const router = useRouter();
  const product = products[id];

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found.</Text>
        <Pressable
          style={styles.backButton}
          onPress={() => router.replace('/(tabs)/home')}
        >
          <Ionicons name="arrow-back" size={28} color="black" />
        </Pressable>
      </View>
    );
  }

  const handleEdit = () => {
    router.push({ pathname: '/Account/eddit', params: { productId: id } }); // Navigate to the edit screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => router.replace('/Account/AdminAccess')}
        >
          <Ionicons name="arrow-back" size={28} color="black" />
        </Pressable>
      </View>

      <Image source={{ uri: product.additionalImages[0] }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>

      <TouchableOpacity onPress={handleEdit} style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Product</Text>
      </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F4F4F4',
    width: '100%',
  },
  productName: {
    fontSize: moderateScale(20),
    textAlign: 'center',
    color: '#3A3535',
    fontWeight: 'bold',
    position: 'relative',
    top: '15%',
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: moderateScale(12),
    color: '#3A3535',
    position: 'relative',
    top: '35%',
  },
  productDescription: {
    fontSize: 16,
    color: '#3A3535',
    position: 'relative',
    top: '20%',
  },
  productImage: {
    width: 250,
    height: 200,
    alignSelf: 'center',
    position: 'absolute',
    top: '50%',
  },
  backButton: {
    padding: 10,
    position: 'absolute',
    left: '3%',
  },
  editButton: {
    backgroundColor: '#FF7315',
    padding: 1.5,
    borderRadius: 5,
    alignSelf: 'center',
    width: width * 0.5,
    position: 'relative',
    top: '80%',
    // Horizontal alignment
    justifyContent: 'space-around',
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: moderateScale(18),
    
  },
 

});

export default ProductDetail;

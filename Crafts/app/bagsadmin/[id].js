import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');
const scale = (size) => (width / 350) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

// Simulated product data
    const Bags = {
        '1': {
            id: '1',
            name: 'CROSS-BODY BAG WITH WEBBING STRAP TEAL',
            price: 'EGP 800.00',
            mainImage: 'https://img.freepik.com/premium-photo/woman-holding-blue-white-purse-street-corner-with-blue-wall-her-blue_961147-44091.jpg?w=996',
            additionalImages: [
                'https://img.freepik.com/premium-photo/purse-sitting-bench-with-plant-background-blue-white-tile-wall-it_961147-44069.jpg?w=996',
                'https://img.freepik.com/premium-photo/blue-white-purse-sitting-ledge-plant-potted-planter-ledge-jigsaw_961147-44070.jpg?w=996',
            ],
            description: 'Fail-safe. Designed in faux leather, this 2-in-1 bag boasts two short handles and a detachable, chevron, webbing strap.',
            rating: 3,
        },
        '2': {
            id: '2',
            name: 'MATTE OVAL EARRINGS',
            price: 'EGP 285.00',
            mainImage: 'https://i.etsystatic.com/18424646/r/il/e44634/5902110444/il_794xN.5902110444_sfuy.jpg',
            additionalImages: [
                'https://i.etsystatic.com/18424646/r/il/aba704/5902094224/il_794xN.5902094224_hf57.jpg',
                'https://i.etsystatic.com/18424646/r/il/54981c/5950174203/il_794xN.5950174203_lgrq.jpg',
            ],
    
            description: 'rochet bag, Granny Square Bag from 100 % premium cotton, summer tote bag, crochet flowers bag, large beach bag for woman',
            rating: 5,
        },
        '3': {
            id: '3',
            name: 'Crochet bag pattern',
            price: 'EGP 899.00',
            mainImage: 'https://img.freepik.com/free-photo/colorful-kitted-bag-by-window_23-2150709557.jpg?t=st=1714907630~exp=1714911230~hmac=c3f838bb2b1b2b28d6af0a1f0ed42b02609702d76742fbb572e460490ab408fd&w=996',
            additionalImages: [
                'https://img.freepik.com/free-photo/colorful-knitted-bag-still-life_23-2150709519.jpg?t=st=1714907676~exp=1714911276~hmac=753ff7acce377fd2d040347abd472b6340fbd80a163df0a2cd2a25fe7521f14e&w=996',
                'https://img.freepik.com/free-photo/colorful-kitted-bag-by-window_23-2150709559.jpg?t=st=1714907772~exp=1714911372~hmac=1f57436f544078b64a62c1a46d65907b58c2eb3bcf837ca38a5f9127db898abb&w=996',
            ],
            description: 'Crochet bag pattern, Granny Square pattern, Granny Square tote bag tutorial',
            rating: 2,
        },
        '4': {
            id: '4',
            name: 'A pink purse with white flower',
            price: 'EGP 1350.00',
            mainImage: 'https://img.freepik.com/premium-photo/pink-purse-with-white-flowers-it-sitting-wooden-bench-plant-wooden-fence_961147-20023.jpg?w=740',
            additionalImages: [
                'https://img.freepik.com/premium-photo/handbag-with-flowers-it-sitting-table-wall-white-background-with-brown_961147-20004.jpg?w=740',
                'https://img.freepik.com/premium-photo/pink-white-purse-with-flowers_961147-20003.jpg?w=740',
            ],
            description: 'A handbag with flowers on it sitting on a table next to a wall',
            rating: 1,
        },
        '5': {
            id: '5',
            name: 'Beautiful and modern handmade',
            price: 'EGP 999.00',
            mainImage: 'https://img.freepik.com/premium-photo/beautiful-luxury-handmade-knitted-bag-with-intricate-patterns-textures_670421-23994.jpg?w=1060',
            additionalImages: [
                'https://img.freepik.com/premium-photo/beautiful-modern-handmade-knitted-bag-with-intricate-patterns-textures_670421-23914.jpg?w=1060',
                'https://img.freepik.com/premium-photo/beautiful-luxury-handmade-knitted-bag-with-intricate-patterns-textures_670421-24001.jpg?w=740',
            ],
            description: 'Set in molten gold-tone metal, these studs display twinkly, faceted stones in oceanic hues. Just add sunshineNon-refundable.',
            rating: 3,
        },
        '6': {
            id: '6',
            name: 'Mediterranean aesthetics bag still life',
            price: 'EGP 185.00',
            mainImage: 'https://img.freepik.com/free-photo/mediterranean-aesthetics-bag-still-life_23-2151141446.jpg?t=st=1714911920~exp=1714915520~hmac=f1bdf0f8785ad5e31481370f991f120bdef2fa3648679ba6fe1b250573b933a9&w=996',
            additionalImages: [
                'https://img.freepik.com/free-photo/mediterranean-aesthetics-bag-still-life_23-2151141483.jpg?t=st=1714911653~exp=1714915253~hmac=636528933c8bda3bbca2c63f902d30ef5df87ff6551482cdd0cd0bc2c1fdc887&w=360',
                'https://img.freepik.com/free-photo/mediterranean-aesthetics-bag-still-life_23-2151141438.jpg?t=st=1714911984~exp=1714915584~hmac=2988f6f5e9ba0673a899dfc1b8589d104cff6d0eeb15366095c59aebcb6e47ff&w=360',
            ],
            description: 'Mediterranean aesthetics bag still life',
            rating: 3,
        },
        '7': {
            id: '7',
            name: 'Tote bags',
            price: 'EGP 290.00',
            mainImage: 'https://i.imgur.com/K5X9fyb.png',
            additionalImages: [
                'https://i.imgur.com/4mNbJLQ.png',
                'https://i.imgur.com/xLMQpNR.png',
            ],
            description: 'Tote bags , Kantha bag, Beach bag, Bags, Fashion bag,Handmade bag by indian women, Freeshipping, ONE OF A KIND ,',
            rating: 4,
        },
        '8': {
            id: '8',
            name: 'Crochet Bag',
            price: 'EGP 380.00',
            mainImage: 'https://i.imgur.com/M4HL4mm.png',
            additionalImages: [
                'https://i.imgur.com/mYsy9E1.png',
                'https://i.imgur.com/hztioug.png',
            ],
            description: 'CROCHET PATTERN Crochet Bag Pattern Tote Pattern crochet purse woman bag, shopping bag, summer bag beach bag, handbag, crochet market bag',
            rating: 1,
        },
    };

const ProductDetail = () => {
  const { id } = useLocalSearchParams(); // Retrieve the product ID from the route parameters
  const router = useRouter();
  const product = Bags[id];

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found.</Text>
        <Pressable
          style={styles.backButton}
          onPress={() => router.replace('/Admin/AdminHome')}
        >
          <Ionicons name="arrow-back" size={28} color="black" />
        </Pressable>
      </View>
    );
  }

  const handleEdit = () => {
    router.push({ pathname: '/', params: { productId: id } }); // Navigate to the edit screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => router.replace('/RenderProducts/render')}
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
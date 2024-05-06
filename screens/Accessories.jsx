import { Image, FlatList, Text, View, Dimensions, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import NavBar from '../components/NavBar/NavBar';
const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;
async function loadFonts() {
  await Font.loadAsync({
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
  });
}
const products = [
  {
    id: '1',
    name: 'TEXTURED DROP EARRINGS',
    price: 'EGP 220.00',
    image: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw77c7e0a6/images/large/03_30105460021_2.jpg?sw=663&sh=848&sm=cut',
  },
  {
    id: '2',
    name: 'MATTE OVAL EARRINGS',
    price: 'EGP 185.00',
    image: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw6c9d4ae9/images/large/02_30103170008_2.jpg?sw=663&sh=848&sm=cut',


  },
  {
    id: '3',
    name: 'INLAY HOOP EARRINGS',
    price: 'EGP 230.00',
    image: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw1b393395/images/large/01_30105430004_1.jpg?sw=663&sh=848&sm=cut',

  },

  {
    id: '4',
    name: '2-PACK SEED BEAD RINGS',
    price: 'EGP 320.00',
    image: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dweaa8489c/images/large/01_30108020021_1.jpg?sw=663&sh=848&sm=cut'
    ,

  },
  {
    id: '5',
    name: '3-PACK MOLTEN STUDS',
    price: 'EGP 230.00',
    image: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwf6271341/images/large/03_30105420008_2.jpg?sw=663&sh=848&sm=cut',
  },
  {
    id: '6',
    name: 'MOLTEN DROP EARRINGS',
    price: 'EGP 185.00',
    image: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwc75119c8/images/large/01_30108050021_1.jpg?sw=663&sh=848&sm=cut',
  },
  {
    id: '7',
    name: 'LEAF DROP ANKLET',
    price: 'EGP 140.00',
    image: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw403ddfec/images/large/01_30100360008_1.jpg?sw=663&sh=848&sm=cut',
  },
  {
    id: '8',
    name: 'RESIN INLAY DROP EARRINGS',
    price: 'EGP 250.00',
    image: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw56ecb162/images/large/01_30105410008_1.jpg?sw=663&sh=848&sm=cut',
  },
];
export default function Accessories() {
  const [searchQuery, setSearchQuery] = useState(''); // State to store search input
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]); // State to track cart items
  const [accessories, setAccessories] = useState(products);
  const router = useRouter();

  const handleNavigation = (productId) => {
    router.push(`/accessories/${productId}`); // Navigate to the product detail page
  };

  const addToCart = (product) => {
    setCart([...cart, product]); // Add the product to the cart
  };
  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId)); // Remove from favorites
    } else {
      setFavorites([...favorites, productId]); // Add to favorites
    }

  };

  // Filter the products based on the search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (

    <View style={styles.container}>


      {/* Search bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search...."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />



      <FlatList
        numColumns={Math.floor(width / 200)}
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <TouchableOpacity style={styles.productContainer}
            onPress={() => handleNavigation(item.id)}
          >


            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <View style={styles.Buttons}>
                <View style={styles.productContainer}>
                  <View style={styles.icon}>
                    <TouchableOpacity onPress={() => toggleFavorite(item.id)}>

                      <FontAwesome name={favorites.includes(item.id) ? 'heart' : 'heart-o'}
                        size={26}

                        color="#10439F"
                      />
                    </TouchableOpacity >
                    <View>
                      <FontAwesome name="shopping-cart" size={29} color="#10439F" />
                    </View>

                  </View>
                  <TouchableOpacity style={styles.addtocartButton} onPress={() => addToCart(item)}>

                    <Text style={styles.addtocartButtonText}>Add to Cart</Text>
                  </TouchableOpacity>



                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <NavBar />
    </View>
  );
}
const styles = StyleSheet.create({

  info: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: scale(10),
  },
  Buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: scale(10),
  },
  addtocart: {
    justifyContent: 'center',
    color: '#10439F',
    fontSize: 17,
    width: 160,
    height: 50,
  },
  icon: {
    justifyContent: 'center',
    width: 180,
    height: 40,
    flexDirection: 'row', // Horizontal alignment
    justifyContent: 'space-around',

  },

  name: {

    textAlign: 'center',
    color: '#10439F',
    fontWeight: "bold",
    fontSize: scale(14),
  },
  productContainer: {
    padding: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'center',
    marginBottom: scale(16),
    borderRadius: 10,
    borderRadius: scale(10),
  },
  price: {
    fontSize: scale(15),
    fontWeight: "bold",
    textAlign: 'center',
    color: '#10439F',
  },

  backToHomeText: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
    paddingTop: 1,
    width: 150,
    color: '#874CCC',
    marginLeft: 8,
    fontFamily: 'Lato-Bold', // Adds space between icon and text
  },
  addtocartButton: {
    backgroundColor: '#10439F',
    alignSelf: 'center',
    padding: scale(8),
    borderRadius: scale(5),
    marginTop: scale(10),
  },
  addtocartButtonText: {
    color: 'white',
    fontWeight: 'bold',
    width: 200,
    height: 30,
    textAlign: 'center',
    paddingHorizontal: 40,
    paddingBottom: 4,
  },
  searchBar: {
    height: scale(40),
    width: '90%',
    borderColor: '#10439F',
    borderWidth: 1,
    borderRadius: scale(5),
    paddingLeft: scale(10),
    marginBottom: scale(30),
  },
  image: {
    width: '100%',
    height: 200,
    aspectRatio: 1,
    borderRadius: scale(10),
    marginBottom: scale(10),
    marginTop: scale(16),
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    flex: 1,

  },

});
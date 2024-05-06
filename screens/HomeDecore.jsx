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
const Decore = [
  {
    id: '1',
    name: 'Decorative Plates',
    price: 'EGP 930.00',
    image: 'https://eg-rv.homzmart.net/catalog/product/w/p/wp104_1_1024x1024_.jpg',
  },
  {
    id: '2',
    name: 'ROO.ART.W.AW073 Towel Holder',
    price: 'EGP 1,119.00',
    image: 'https://eg-rv.homzmart.net/catalog/product/a/r/art.w.aw_073.jpg',


  },
  {
    id: '3',
    name: 'FEKHM.FKH0033 Wall Accessory',
    price: 'EGP 695.00',
    image: 'https://eg-rv.homzmart.net/catalog/product/f/k/fkh0033-en.jpg',
  },

  {
    id: '4',
    name: 'UNI.GAL.008 Wall accessory ',
    price: '725.00',
    image: 'https://eg-rv.homzmart.net/catalog/product/0/0/008_resized_pdp_1.jpg'
    ,

  },
  {
    id: '5',
    name: 'AHvn1 Wall Accessory handmade',
    price: '637.00',
    image: 'https://eg-rv.homzmart.net/catalog/product/v/n/vn_01.jpg'
    ,

  },
  {
    id: '6',
    name: 'WA.M.576-4 Canvas wall frame',
    price: '988.00',
    image: 'https://eg-rv.homzmart.net/catalog/product/8/0/80_resized_copy__2.png'
    ,

  },
  {
    id: '7',
    name: 'Plant pot 140 x 35 x 35 cm - gold and white ',
    price: '1,817.00',
    image: 'https://eg-rv.homzmart.net/catalog/product/a/n/ant.st111.jpg'
    ,

  },
  {
    id: '8',
    name: 'AHCL31S Wall Clock 40x40x40 cm - Multi Color',
    price: '530.00',
    image: 'https://eg-rv.homzmart.net/catalog/product/3/1/31_copy_2__2.jpg'
    ,

  },

];
export default function HomeDecore() {
  const [searchQuery, setSearchQuery] = useState(''); // State to store search input
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]); // State to track cart items
  const [bags, setBags] = useState(Decore);
  const router = useRouter();

  const handleNavigation = (DecoreId) => {
    router.push(`/home/${DecoreId}`); // Navigate to the product detail page
  };
  const addToCart = (Decore) => {
    setCart([...cart, Decore]); // Add the product to the cart
  };
  const toggleFavorite = (DecoreId) => {
    if (favorites.includes(DecoreId)) {
      setFavorites(favorites.filter((id) => id !==DecoreId)); // Remove from favorites
    } else {
      setFavorites([...favorites, DecoreId]); // Add to favorites
    }

  };
  const filteredProducts = Decore.filter((Decore) =>
    Decore.name.toLowerCase().includes(searchQuery.toLowerCase())
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
    flexDirection: 'row', 
    justifyContent: 'space-around',

  },

  name: {

    textAlign: 'center',
    color: 'black',
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
    fontSize: scale(16),
    fontWeight: "bold",
    textAlign: 'center',
    color: 'black',
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
    paddingTop: scale(5),
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

import { Image, FlatList, Text, View, Dimensions, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link, useRouter } from 'expo-router';
import { useState,useEffect } from 'react';
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
const Product = [
  {
    id: '1',
    name: 'CROSS-BODY BAG',
    price: 'EGP 1700.00',
    image: 'https://img.freepik.com/premium-photo/woman-holding-blue-white-purse-street-corner-with-blue-wall-her-blue_961147-44091.jpg?w=996',
  },
  {
    id: '2',
    name: 'HANDHELD BAG ',
    price: 'EGP 685.00',
    image: 'https://i.etsystatic.com/18424646/r/il/e44634/5902110444/il_794xN.5902110444_sfuy.jpg',


  },
  {
    id: '3',
    name: 'INLAY HOOP EARRINGS',
    price: 'EGP 230.00',
    image: 'https://img.freepik.com/free-photo/colorful-kitted-bag-by-window_23-2150709557.jpg?t=st=1714907630~exp=1714911230~hmac=c3f838bb2b1b2b28d6af0a1f0ed42b02609702d76742fbb572e460490ab408fd&w=996',
   
  },

  {
    id: '4',
    name: 'A pink purse with white flower',
    price: 'EGP 1600.00',
    image: 'https://img.freepik.com/premium-photo/pink-purse-with-white-flowers-it-sitting-wooden-bench-plant-wooden-fence_961147-20023.jpg?w=740'
    ,
 
  },
  {
    id: '5',
    name: 'Beautiful and modern handmade',
    price: 'EGP 999.00',
    image: 'https://img.freepik.com/premium-photo/beautiful-modern-handmade-knitted-bag-with-intricate-patterns-textures_670421-23943.jpg?w=1060',
  },
  {
    id: '6',
    name: 'MOLTEN DROP EARRINGS',
    price: 'EGP 185.00',
    image: 'https://img.freepik.com/free-photo/mediterranean-aesthetics-bag-still-life_23-2151141483.jpg?t=st=1714911653~exp=1714915253~hmac=636528933c8bda3bbca2c63f902d30ef5df87ff6551482cdd0cd0bc2c1fdc887&w=360',
  },
  {
    id: '7',
    name: 'Tote bags',
    price: 'EGP 290.00',
    image: 'https://i.imgur.com/K5X9fyb.png',
  },
  {
    id: '8',
    name: ' Crochet Bag',
    price: 'EGP 380.00',
    image: 'https://i.imgur.com/M4HL4mm.png',
  },
];
export default function Bags() {
  const [searchQuery, setSearchQuery] = useState(''); // State to store search input
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]); // State to track cart items
  const [bags, setBags] = useState(Product);
  const router = useRouter();

  const handleNavigation = (ProductId) => {
    router.push(`/bags/${ProductId}`); // Navigate to the product detail page
  };

  const addToCart = (Product) => {
    setCart([...cart, Product]); // Add the product to the cart
  };
  const toggleFavorite = (ProductId) => {
    if (favorites.includes(ProductId)) {
      setFavorites(favorites.filter((id) => id !== ProductId)); // Remove from favorites
    } else {
      setFavorites([...favorites, ProductId]); // Add to favorites
    }

  };

  // Filter the products based on the search query
  const filteredProducts = Product.filter((Product) =>
    Product.name.toLowerCase().includes(searchQuery.toLowerCase())
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
  
      {/* Display filtered product list */}
      <FlatList
        numColumns={2}
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
      <NavBar/>
    </View>
  );
}
const styles = StyleSheet.create({


  info: {
    justifyContent: 'center',
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
    width: 175,
    height: 50,
  },
 icon: {
    justifyContent: 'center',
    width: 180,
    height: 40,
    flexDirection: 'row', // Horizontal alignment
    justifyContent: 'space-around',
   
  },

  texttitle:{
    fontFamily: 'Lato-Bold',
     color: '#874CCC',
     fontSize: moderateScale(17),
     textAlign: 'center',
     marginVertical: 10,
     bottom: '0%',
     width: width,

 },
  name: {
    
    textAlign: 'center',
    color: 'black',
    fontWeight: "bold",
    fontSize: scale(14),
  },
  productContainer: {
    padding: 10,
    marginBottom: 1,
    borderRadius: 10,
  },
  price: {
    fontSize: scale(15),
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
},

  searchBar: {
    height: 40,
    width: 300,
    borderColor: '#10439F',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 16,
  },

  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 70,
    flex: 1,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  inputView: {
    gap: 20,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 5
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: "#0E46A3",
    borderWidth: 1,
    borderRadius: 7
  },

  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: "#0E46A3",
  },

  button: {
    backgroundColor: "#0E46A3",
    height: 32,
    borderColor: "gray",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 9,
    marginBottom: 7
  },
  buttonText: {
    color: "white",
    fontSize: 4,
    fontWeight: "bold"
  },
  buttonView: {
    // width: "100%",
    paddingHorizontal: 50
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

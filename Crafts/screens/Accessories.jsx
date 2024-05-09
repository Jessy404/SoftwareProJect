import { Image, FlatList, Text, View, Dimensions, Pressable, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';


// import NavBar from '../components/NavBar/NavBar';
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

      <View style={styles.header}>
        <Pressable
          style={styles.BackButton}
          onPress={() => router.replace("/(tabs)/home")}
        >
          <Ionicons name="arrow-back" size={28} color="black" />
        </Pressable>
        {/* <Text style={styles.Title5}>Accessories Page</Text> */}
      </View>


      {/* Search bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search...."
        placeholderTextColor='#3A3535'
        value={searchQuery}
        onChangeText={setSearchQuery}
      />


      {/* Display filtered product list */}
      <FlatList
        numColumns={1}
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        key={1}
        renderItem={({ item }) => (

          <TouchableOpacity 
            onPress={() => handleNavigation(item.id)}
          >


            <View style={styles.productContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.info}>
              </View>
                <Text style={styles.name}>{item.name}</Text>
                {/* <View style={styles.Buttons}> */}
                  <TouchableOpacity style={styles.addtocart} onPress={() => addToCart(item)}>
                    <FontAwesome name="shopping-cart" size={23} color="#3A3535" />
                    {/* <Text style={styles.addtocart}>Add to Cart</Text> */}

                  </TouchableOpacity>
                  <Text style={styles.price}>{item.price}</Text>
                  <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                    {/* Show filled star if favorited, otherwise an empty star */}
                    <FontAwesome name={favorites.includes(item.id) ? 'heart' : 'heart-o'}
                      size={20}
                      color="#3A3535"
                    />
                  </TouchableOpacity>
                {/* </View> */}
            </View>
          </TouchableOpacity>
        )}
      />
      {/* <NavBar/> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 70,
    flex: 1,
    backgroundColor:'#F4F4F4',
  },

  info: {
    justifyContent: 'center',
    backgroundColor:'#F4F4F4',


  },
  header: {
    flexDirection: 'row',
    padding: 10,
    gap: 20,
  },
  Title5: {
    alignSelf: 'center',
    fontSize: moderateScale(15),
    fontWeight: 'bold',
  },
  BackButton: {
    padding: 10,
    position: 'absolute',
    right: '42%',
    bottom: '25%',
  },
  Buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    backgroundColor:'#F4F4F4',

  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 25,
  },
  addtocart: {
    // justifyContent: 'center',
    color: '#3A3535',
    fontSize: 17,
    width: 175,
    position:'relative',
    bottom:'85%',
    // height: 50,
  },
  name: {
    fontSize: moderateScale(14),
    textAlign: 'center',
    color: '#3A3535',
    fontWeight: "bold",
    backgroundColor:'#F4F4F4',

  },
  productContainer: {
    width: width,
    // height:'35%',
    alignSelf: 'center',
    backgroundColor: '#F4F4F4',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  price: {
    fontSize: moderateScale(11),
    fontWeight: "bold",
    textAlign: 'center',
    position: 'absolute',
    top: '94%',
    right: '1%',
    backgroundColor: '#FF7315',
    borderRadius: 25,
    color: '#F4F4F4',
    paddingVertical: 5,
    paddingHorizontal: 13,
    overflow: 'hidden',
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texttitle: {
    fontSize: moderateScale(12),
    fontWeight: 'bold',
    color: '#874CCC',
  },
  texttitle2: {
    fontFamily: 'Lato-Bold',
    color: '#874CCC',
    fontSize: moderateScale(20),
    textAlign: 'center',
    marginVertical: 10,
    bottom: '0%',
    width: width,
    flexDirection: 'row',
    alignItems: 'center', // Align items in the center vertically
    justifyContent: 'space-between',
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
    fontFamily: 'Lato-Bold',
  },

  searchBar: {
    height: 40,
    width: 300,
    borderColor: '#3A3535',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 16,
  },

  image: {
    width: "100%",
    height: 200,
    alignSelf: 'center',
    position: 'relative',
    bottom: '3%',
    // borderRadius:'50%',
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
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10
  },
  buttonText: {
    color: "white",
    fontSize: 18,
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

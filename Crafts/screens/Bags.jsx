import { Image, FlatList, Text, View, Dimensions, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link, useRouter } from 'expo-router';
import { useState,useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
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
    price: 'EGP 800.00',
    image: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwa6d5ebfe/images/large/01_32000610174_1.jpg?sw=663&sh=848&sm=cut',
  },
  {
    id: '2',
    name: 'HANDHELD BAG ',
    price: 'EGP 685.00',
    image: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw9f50ee5b/images/large/01_32000910008_1.jpg?sw=663&sh=848&sm=cut',


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
     <View style={styles.texttitle}>
<Text style={styles.texttitle}> HANDBAGS& PURSES FOR WOMEN </Text>

</View>
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
                  <TouchableOpacity style={styles.addtocart} onPress={() => addToCart(item)}>
                    <FontAwesome name="shopping-cart" size={29} color="#C65BCF" />
                    <Text style={styles.addtocart}>Add to Cart</Text>
                  </TouchableOpacity>


                  <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                    {/* Show filled star if favorited, otherwise an empty star */}
                    <FontAwesome name={favorites.includes(item.id) ? 'heart' : 'heart-o'}
                      size={24}
                      textAlign='center'
                      color="#874CCC"
                    />
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
  },
  Buttons: {
    flexDirection: 'row', // Arrange elements horizontally
    justifyContent: 'space-between', // Distribute space evenly
    paddingTop: 10, // Optional padding
  },
  addtocart: {
    justifyContent: 'center',
    color: '#10439F',
    fontSize: 17,
    width: 175,
    height: 50,
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
    fontSize: 13,
    textAlign: 'center',
    color: '#10439F',
    fontWeight: "bold"
  },
  productContainer: {
    padding: 10,
    marginBottom: 1,
    borderRadius: 10,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: 'center',
    color: '#874CCC',
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

  searchBar: {
    height: 40,
    width: 400,
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

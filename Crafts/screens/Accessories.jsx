import { Image,FlatList,Text,View, ViewPressable, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { auth } from '../firebase/config';
import { Link, Stack, router } from 'expo-router';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';


  const products = [
    {
      id: '1',
      name: 'TEXTURED DROP EARRINGS',
      price: 'EGP 220.00',
      image: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw77c7e0a6/images/large/03_30105460021_2.jpg?sw=663&sh=848&sm=cut',
      description: 'TEXTURED DROP EARRINGS',
    },
    {
      id: '2',
      name: 'MATTE OVAL EARRINGS',
      price: 'EGP 185.00',
      image: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw6c9d4ae9/images/large/02_30103170008_2.jpg?sw=663&sh=848&sm=cut',
      description: 'MATTE OVAL EARRINGS',
    },
    {
      id: '3',
      name: 'INLAY HOOP EARRINGS', 
      price: 'EGP 230.00',
      image: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw1b393395/images/large/01_30105430004_1.jpg?sw=663&sh=848&sm=cut',
      description: 'MOTHER OF PEARL INLAY HOOP EARRINGS',
    },

    {
      id: '4',
      name: '2-PACK SEED BEAD RINGS GOLD',
      price: 'EGP 320.00',
      image: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dweaa8489c/images/large/01_30108020021_1.jpg?sw=663&sh=848&sm=cut'
      ,
      description: 'color:Gold',
    },
    {
    id: '5',
    name: '3-PACK MOLTEN STUDS',
    price: 'EGP 230.00',
    image: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwf6271341/images/large/03_30105420008_2.jpg?sw=663&sh=848&sm=cut',
    description: 'Set in molten gold-tone metal, these studs display twinkly, faceted stones in oceanic hues. Just add sunshineNon-refundable.',
  },
  {
  id: '6',
  name: 'MOLTEN DROP EARRINGS',
  price: 'EGP 185.00',
  image: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwc75119c8/images/large/01_30108050021_1.jpg?sw=663&sh=848&sm=cut',
  description: 'Mesmerising molten cascades from these earrings, designed in gold-tone metal. Tuck your hair behind your ears to show them off Non-refundable',
},
{
  id: '7',
  name: 'LEAF DROP ANKLET',
  price: 'EGP 140.00',
  image: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw403ddfec/images/large/01_30100360008_1.jpg?sw=663&sh=848&sm=cut' ,
  description: 'Which way to the beach? Stationed with leafy charms green beads, this anklet is designed in shiny gold-tone metal.',
},
{
id: '8',
name: '2-FACET BEAD HOOP EARRINGS',
price: 'EGP 275.00',
image: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw7c508e8c/images/large/03_30103130007_2.jpg?sw=663&sh=848&sm=cut',
description: 'Hanging from a simple Mother of Pearl disc stud, these earrings feature concentric circle drops that are threaded with teeny tiny facet beads.Non-refundable.',
},
  ]
  export default function Accessories(){
    const [searchQuery, setSearchQuery] = useState(''); // State to store search input
    const [favorites, setFavorites] = useState([]);
    const [cart, setCart] = useState([]); // State to track cart items

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
return(
  
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
            <TouchableOpacity style={styles.productContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
              <View style={styles.Buttons}>

              <TouchableOpacity style={styles.addtocart} onPress={() => addToCart(item)}>
                <FontAwesome name="shopping-cart" size={24} color="#64CCC5" />
                <Text style={styles.addtocart}>Add to Cart</Text>
              </TouchableOpacity>

                <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                {/* Show filled star if favorited, otherwise an empty star */}
                <FontAwesome name={favorites.includes(item.id) ? 'star' : 'star-o'}
                  size={24}
                  color="#176B87"
                />
              </TouchableOpacity>
              </View>
         

                <Link href={`/product/${item.id}`}>View Details</Link>
              </View>
            </TouchableOpacity>
          )}
        />
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
    color:'#64CCC5',
    width:200,
    height:50,
  },
  name: {
    fontSize: 10,
    textAlign: 'center',
    color: '#053B50',
    fontWeight: "bold"
    
  },
  searchBar: {
    height: 40,
    width:400,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 16,
  },
  price: {
    fontSize: 9,
    textAlign: 'center',
    color: '#176B87',
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

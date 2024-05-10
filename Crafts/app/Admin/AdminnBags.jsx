import { Image, FlatList, Pressable, Text, View, Dimensions, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

// import NavBar from '../components/NavBar/NavBar';
const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;

const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;
async function loadFonts() {
  await Font.loadAsync({
    'Lato-Bold': require('@/assets/fonts/Lato-Bold.ttf'),
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

      <View style={styles.header}>
        <Pressable
          style={styles.BackButton}
          onPress={() => router.replace("/Account/adminHome")}
        >
          <Ionicons name="arrow-back" size={28} color="black" />
        </Pressable>
        {/* <Text style={styles.Title5}>Accessories Page</Text> */}
      </View>

<View style = {styles.sideBySide}>
<TextInput
        style={styles.searchBar}
        placeholder="Search...."
        placeholderTextColor='#3A3535'
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Pressable style={styles.button} onPress={() => router.replace("/Account/addBag")}>
        <Text style={styles.buttonText}> Add new </Text>
      </Pressable>
</View>
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
    backgroundColor: '#F4F4F4',
  },

  info: {
    justifyContent: 'center',
    backgroundColor: '#F4F4F4',


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
    backgroundColor: '#F4F4F4',

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
    position: 'relative',
    bottom: '85%',
    // height: 50,
  },
  name: {
    fontSize: moderateScale(14),
    textAlign: 'center',
    color: '#3A3535',
    fontWeight: "bold",
    backgroundColor: '#F4F4F4',

  },
  button: {
    fontSize: moderateScale(11),
    fontWeight: "bold",
    textAlign: 'center',
    // position: ,
    height :40 ,
    
    // top: '94%',
    right: '1%',
    backgroundColor: '#FF7315',
    borderRadius: 20,
    color: '#F4F4F4',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft :10,
    overflow: 'hidden',
    // width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  paddingRight :5 ,
  },
  sideBySide: {
    // position: 'relative',
    // justifyContent:'center',
    flexDirection: "row",
    backgroundColor: '#F4F4F4',
    // justifyContent: 'center',
    marginBottom : 60 ,

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
    alignItems: 'center',
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

  // button: {
  //   backgroundColor: "#0E46A3",
  //   height: 45,
  //   borderColor: "gray",
  //   borderWidth: 1,
  //   borderRadius: 5,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginTop: 10,
  //   marginBottom: 10
  // },
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

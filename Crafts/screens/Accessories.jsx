import { Image, FlatList, Text, View, Dimensions, Pressable, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { getDocs, collection } from "firebase/firestore";
import { db } from '../firebase/config';
import Category from '@/components/category';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategrioes, selectMyCategories, setCredentials } from '@/Store/Categories/CategoriesSlice';
import { VideoCard } from '@/components';


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

export default function Accessories() {
  const [searchQuery, setSearchQuery] = useState(''); // State to store search input
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]); // State to track cart items
  const [accessories, setAccessories] = useState([]);
  const router = useRouter();
  const value = useSelector(selectMyCategories) 
  const dispatch = useDispatch()

  const handleNavigation = (productId) => {
    router.push(`/accessories/${productId}`);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }

  };


  useEffect(() => {
    // const fetchProducts = async () => {
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "categoryone"));
    //     const productsFromFirestore = querySnapshot.docs.map(doc => ({
    //       id: doc.id,
    //       ...doc.data()
    //     }));
    //     console.log('Products from Firestore:', productsFromFirestore);
    //     dispatch(setCredentials(productsFromFirestore));
    //     console.log(value)
    //   } catch (error) {
    //     console.error("Error fetching products:", error);
    //   }
    // };

    // fetchProducts();
    dispatch(fetchCategrioes())
  }, [dispatch]);



  const filteredProducts = accessories.filter((product) =>
    product.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <FlatList
    data={value}
    renderItem={({ item }) => (
      <VideoCard
      key={item.id}
        thumbnail={item.image1}
        price={item.price}
        title={item.title}
        id={item.id}

      />
    )}
  />
    
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

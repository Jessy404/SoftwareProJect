import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, Dimensions,RefreshControl, Text, View, StyleSheet } from "react-native";
import { Link, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
// import { TailwindProvider } from 'tailwindcss-react-native';
import Scroll from "@/components/ScrollView/ScrollView";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategrioes, selectMyCategories, setCredentials } from '@/Store/Categories/CategoriesSlice';
import { images } from "../constants";
// import useAppwrite from "../../lib/useAppwrite";
// import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import { EmptyState, SearchInput, Trending, Arrival, Discover, VideoCard } from "../components";
import Discoverr from "@/components/Discoverr";


const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;


const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

const products = [
    {
      id: '1',
      name: 'TEXTURED DROP EARRINGS',
      price: 'EGP 220.00',
      image: 'https://i.imgur.com/NQEQ4dt.jpg',
    },
    {
      id: '2',
      name: 'MATTE OVAL EARRINGS',
      price: 'EGP 185.00',
      image: 'https://i.imgur.com/pt9rKKQ.jpg',
  
  
    },
    {
      id: '3',
      name: '2-PACK SEED BEAD RINGS',
      price: 'EGP 320.00',
      image: 'https://i.imgur.com/dtr4Pay.jpg'
      
  
    },
  
    
]

const Home = () => {
  const value = useSelector(selectMyCategories) 
  const dispatch = useDispatch()

    const [searchQuery, setSearchQuery] = useState(''); // State to store search input


    const [accessories, setAccessories] = useState(products);
    const router = useRouter();

//   const { data: posts, refetch } = useAppwrite(getAllPosts);
//   const { data: latestPosts } = useAppwrite(getLatestPosts);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  // one flatlist
  // with list header
  
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


  //  we cannot do that with just scrollview as there's both horizontal and vertical scroll (two flat lists, within trending)

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={value}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
          key={item.id}
            // title={item.name}
            thumbnail={item.image1}
            price={item.price}
            title={item.title}
            id={item.id}
            // video={item.video}
            // creator={item.creator.username}
            // avatar={item.creator.avatar}
          />
        )}
        ListHeaderComponent={() => (
          <View style={styles.scroll}>
                <Scroll/>
            {/* <SearchInput /> */}

            <View >
              <Text style={styles.text}>
                Discover
              </Text>

              <Trending posts={filteredProducts}/>
            </View>
            <View >
              <Text style={styles.text}>
                Trending
              </Text>

              <Discoverr posts={value}/>
            </View>
            <View>
              <Text style={styles.text}> 
                Best Sellers
              </Text>
            </View>
          </View>
        )}

        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
        // alignItems: "center",
        // justifyContent: "center",
        paddingTop: 70,
        flex: 1,
        backgroundColor: '#F4F4F4',
        width: width,
      },
      text:{
        fontWeight:'bold',
        color:'#FF7315',
        fontSize: moderateScale(20),
        fontWeight: "bold",
        // backgroundColor:'#F4F4F4',
        paddingVertical: moderateScale(25), // Adjust the value as needed for your design
      },

})

export default Home;

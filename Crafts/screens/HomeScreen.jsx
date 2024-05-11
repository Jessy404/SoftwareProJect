import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, Dimensions,RefreshControl, Text, View, StyleSheet } from "react-native";
import { Link, useRouter } from 'expo-router';
// import { TailwindProvider } from 'tailwindcss-react-native';
import Scroll from "@/components/ScrollView/ScrollView";

import { images } from "../constants";
// import useAppwrite from "../../lib/useAppwrite";
// import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import { EmptyState, SearchInput, Trending, Arrival, Discover, VideoCard } from "../components";


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
      name: 'INLAY HOOP EARRINGS',
      price: 'EGP 230.00',
      image: 'https://i.imgur.com/Wi5g9wU.jpg',
  
    },
  
    {
      id: '4',
      name: '2-PACK SEED BEAD RINGS',
      price: 'EGP 320.00',
      image: 'https://i.imgur.com/dtr4Pay.jpg'
      
  
    },
    
]

const Home = () => {
    const [searchQuery, setSearchQuery] = useState(''); // State to store search input


    const [accessories, setAccessories] = useState(products);
    const router = useRouter();

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
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
  // and horizontal flatlist

  //  we cannot do that with just scrollview as there's both horizontal and vertical scroll (two flat lists, within trending)

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
          key={item.id}
            // title={item.name}
            thumbnail={item.image}
            price={item.price}
            title={item.name}
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

              <Trending posts={filteredProducts}/>
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

import { View, Text, StyleSheet, Dimensions, Image, ScrollView, TextInput, FlatList, TouchableOpacity, } from 'react-native';
import {React,useState} from 'react';
import Scroll from '../components/ScrollView/ScrollView';
import NavBar from "../components/NavBar/NavBar";
import Hamburger from "../components/Hamburger/Hamburger";
import { router } from "expo-router";


const { width, height } = Dimensions.get('window');
const smallScreenWidth = 400;
const baseWidth = 360;
const baseHeight = 640;
const widthScale = width / baseWidth;
const heightScale = height / baseHeight;
const scaleWidth = (size) => widthScale * size;
const scaleHeight = (size) => heightScale * size;
const banner = require('../assets/banner/banner.jpg');

export default function HomeScreen() {
 
    const cardData = [
        { id: '1', image: require('../assets/category list/1.jpg'), title: 'Product 1' },
        { id: '2', image: require('../assets/category list/2.jpg'), title: 'Product 2' },
        { id: '3', image: require('../assets/category list/3.jpg'), title: 'Product 3' },
        { id: '4', image: require('../assets/category list/4.jpg'), title: 'Product 4' },
    ];
    const [searchQuery, setSearchQuery] = useState('');
    const filteredProducts = cardData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    

    const renderCardItem = ({ item }) => (
        <TouchableOpacity style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.title}</Text>
        </TouchableOpacity>
    );



    return (

        <View style={styles.container}>
               <TextInput
        style={styles.searchBar}
        placeholder="Search...."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />


      {/* Display filtered product list */}
   
            
            <Hamburger style={styles.hamburgerPosition} />
            {/* <TextInput style={styles.searchBar} placeholder="Search products" /> */}
            {/* <Image source={banner} style={styles.banner} /> */}
            <ScrollView style={styles.scrollView}>
                <Scroll />
            </ScrollView>
            <Text style={styles.categtitle}>Discover</Text>

            <TouchableOpacity style={styles.categoryCard} onPress={() => router.replace("/Account/accessories")}>
                <Image source={require('../assets/category list/1.jpg')} style={styles.imgcategory1}></Image>
                <Text style={styles.categtext}>Category 1</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard2} onPress={() => router.replace("/Account/bags")}>
                <Image source={require('../assets/category list/4.jpg')} style={styles.imgcategory1}></Image>
                <Text style={styles.categtext}>Category 2</Text>


            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard3}>
                <Image source={require('../assets/category list/3.jpg')} style={styles.imgcategory1}></Image>

                <Text style={styles.categtext}>Category 3</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard4}>
                <Image source={require('../assets/category list/2.jpg')} style={styles.imgcategory1}></Image>
                <Text style={styles.categtext}>Category 4</Text>


            </TouchableOpacity>

            <Text style={styles.featuredtitle}>Featured Products</Text>
            <View style={styles.flatscrollcontanier}></View>

            <FlatList
                data={cardData}
                renderItem={renderCardItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.cardList}
            />

            <NavBar />


        </View>

    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
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
    imgcategory1: {
        width: width * 0.40,
        height: height * 0.12,
        resizeMode: 'cover',
        borderRadius: 10,
        marginTop: 10,
        right: '9%',
        bottom: '27%',
    },
    categtext: {
        fontSize: 12,
        fontWeight: 'bold',
        bottom: '25%',
        left: '33%',
    },
    categtitle: {
        bottom:850,
        right: '40%',
        fontSize: 18,
    },
    featuredtitle: {
        bottom: '34%',
        right: '34%',
        fontSize: 14,
    },
    categoryList: {
        flexGrow: 0,
    },
    categoryCard: {
        backgroundColor: '#e0e0e0',
        borderRadius: 20,
        marginHorizontal: 10,
        marginTop: -200,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
        bottom: '30%',
        width: width * 0.40,
        height: height * 0.15,
        right: '27%',
        bottom: '78%',
    },
    categoryCard2: {
        backgroundColor: '#e0e0e0',
        borderRadius: 20,
        marginHorizontal: 10,
        marginTop: -200,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
        bottom: '30%',
        width: width * 0.40,
        height: height * 0.15,
        left: '27%',
        bottom: '69%',
    },
    categoryCard3: {
        backgroundColor: '#e0e0e0',
        height: height * 0.15,
        borderRadius: 20,
        marginHorizontal: 10,
        marginTop: -200,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
        width: width * 0.40,
        // height: '15%',
        left: '27%',
        bottom: '43.5%',
    },
    categoryCard4: {
        backgroundColor: '#e0e0e0',
        borderRadius: 20,
        marginHorizontal: 10,
        marginTop: -200,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
        bottom: '30%',
        width: width * 0.40,
        height: height * 0.15,
        right: '27%',
        bottom: '35%',
    },
    categoryText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    scrollView: {
        width: '100%',
        marginTop: 10,
        bottom: '48%',
    },
    hamburgerPosition: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    cardList: {
        // height: '-20%', 
        bottom: '-5%',
        marginVertical: -300,
    },
    card: {
        backgroundColor: '#e0e0e0',
        borderRadius: 20,
        marginHorizontal: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: width * 0.50,
        height: height * 0.13,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardImage: {
        width: width * 0.50,
        height: height * 0.10,
        resizeMode: 'cover',
        borderRadius: 10,
        top: '2%',
    },
    cardTitle: {
        fontWeight: 'bold',
        marginTop: 5,
        fontSize: 12,
        // bottom:'20%',
    },
});

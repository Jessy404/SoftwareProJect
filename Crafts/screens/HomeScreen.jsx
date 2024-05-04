import { View, Text, StyleSheet, Dimensions, Image, ScrollView, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import Scroll from '../components/ScrollView/ScrollView';
import NavBar from "../components/NavBar/NavBar";
import Hamburger from "../components/Hamburger/Hamburger";
// import { TouchableOpacity } from 'react-native-gesture-handler';
import CategoryCard from '../components/CategoryCard/CategoryCard'; // Import the new component


const { width, height } = Dimensions.get('window');
const smallScreenWidth = 400;

const banner = require('../assets/banner/banner.jpg');
const categories = [
    { id: '1', title: 'Electronics' },
    { id: '2', title: 'Fashion' },
    // Add more categories here
];

export default function HomeScreen() {
    const cardData = [
        { id: '1', image: require('../assets/category list/1.jpg'), title: 'Category 1' },
        { id: '2', image: require('../assets/category list/2.jpg'), title: 'Category 2' },
        { id: '3', image: require('../assets/category list/3.jpg'), title: 'Category 3' },
        { id: '4', image: require('../assets/category list/4.jpg'), title: 'Category 4' },
        // Add more items here
    ];

    const renderCardItem = ({ item }) => (
        <TouchableOpacity style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.title}</Text>
        </TouchableOpacity>
    );



    return (

        <View style={styles.container}>
            <Hamburger style={styles.hamburgerPosition} />
            <TextInput style={styles.searchBar} placeholder="Search products" />
            {/* <Image source={banner} style={styles.banner} /> */}
            <ScrollView style={styles.scrollView}>
                <Scroll />
            </ScrollView>
            <Text style={styles.categtitle}>Discover</Text>

            <TouchableOpacity style={styles.categoryCard}>
                <Image source={require('../assets/category list/1.jpg')} style={styles.imgcategory1}></Image>
                <Text style={styles.categtext}>Category 1</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard2}>
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
        width: '97%',
        height: height * 0.04,
        backgroundColor: '#0f0f0f0f',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginVertical: 10,
        bottom: '30%',
    },
    imgcategory1: {
        width: width * 0.40,
        height: height * 0.12,
        resizeMode: 'cover',
        borderRadius: 10,
        marginTop: 10,
        right: '5%',
        bottom: '18%',
    },
    categtext: {
        fontWeight: 'bold',
        bottom: '11%',
        left: '35%',
    },
    categtitle: {
        // fontWeight: 'bold',
        bottom: '66%',
        right: '43%',
        fontSize:25,
    },
    featuredtitle: {
        // fontWeight: 'bold',
        bottom: '25%',
        right: '36%',
        fontSize:25,
    },
    categoryList: {
        flexGrow: 0, // Prevents FlatList from stretching
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
        bottom: '49%',
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
        bottom: '48%',
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
        bottom: '30%',
        width: width * 0.40,
        // height: '15%',
        left: '27%',
        bottom: '29%',
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
        bottom: '28%',
    },
    categoryText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    scrollView: {
        width: '100%',
        marginTop: 10,
        bottom: '30%',
    },
    hamburgerPosition: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    cardList: {
        height: '1%', // Adjust the height as needed
        bottom:'5%',
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
        width: width * 0.40, // Adjust the width as needed
        height: height * 0.15, // Adjust the height as needed
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardImage: {
        width: width * 0.35, // Adjust the width as needed
        height: height * 0.10, // Adjust the height as needed
        resizeMode: 'cover',
        borderRadius: 10,
    },
    cardTitle: {
        fontWeight: 'bold',
        marginTop: 5,
    },
});

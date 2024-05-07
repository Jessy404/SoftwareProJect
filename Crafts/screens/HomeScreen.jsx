import { View, Text, StyleSheet, Dimensions, Image, ScrollView, TextInput, FlatList, TouchableOpacity, } from 'react-native';
import { React, useState } from 'react';
import Scroll from '../components/ScrollView/ScrollView';
// import NavBar from "../components/NavBar/NavBar";
// import Hamburger from "../components/Hamburger/Hamburger";
import { router } from "expo-router";
import { PoppinsText } from '../components/StyledText';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from "react-native-safe-area-context";



const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const { width, height } = Dimensions.get('window');
const smallScreenWidth = 400;
const baseWidth = 360;
const baseHeight = 640;
const widthScale = width / baseWidth;
const heightScale = height / baseHeight;
const scaleWidth = (size) => widthScale * size;
const scaleHeight = (size) => heightScale * size;
const banner = require('../assets/banner/banner.jpg');
const scale = size => (width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;




export default function HomeScreen() {
    const [isHeartFilled, setIsHeartFilled] = useState(false);

    const toggleHeartFill = () => {
        setIsHeartFilled(!isHeartFilled);
    };





    const images = [
        { id: '1', image: require('../assets/category list/1.jpg'), },
        { id: '2', image: require('../assets/category list/2.jpg'), },
        { id: '3', image: require('../assets/category list/3.jpg'), },
        { id: '4', image: require('../assets/category list/4.jpg'), },
    ];
    const images2 = [
        { id: '1', image: require('../assets/featured products/03.jpg'), title: 'Product A', price: '$49.99' },
        { id: '2', image: require('../assets/featured products/02.jpg'), title: 'Product B', price: '$39.99' },
        { id: '3', image: require('../assets/featured products/04.jpg'), title: 'Product C', price: '$59.99' },
        { id: '4', image: require('../assets/featured products/01.jpg'), title: 'Product D', price: '$29.99' },
    ];
    const [searchQuery, setSearchQuery] = useState('');
    // const filteredProducts = cardData.filter((item) =>
    //     item.title.toLowerCase().includes(searchQuery.toLowerCase())
    // );


    const renderCardItem = ({ item }) => {
        const handleCardPress = () => {
            switch (item.id) {
                case '1':
                    router.replace("/RenderProducts/render");
                    break;
                case '2':
                    router.replace('/RenderProducts/render2');
                    break;
                case '3':
                    router.replace('/RenderProducts/render');
                    break;
                case '4':
                    router.replace('/RenderProducts/render');
                    break;
                default:
                    break;
            }
        };

        return (
            <TouchableOpacity style={styles.card} onPress={handleCardPress}>
                <Image source={item.image} style={styles.cardImage} />
            </TouchableOpacity>
        );
    };

    const renderCardItem2 = ({ item }) => {
        const handleCardPress2 = () => {
            switch (item.id) {
                case '1':
                    router.replace('/RenderProducts/render2');
                    break;
                case '2':
                    router.replace('/RenderProducts/render2');
                    break;
                case '3':
                    router.replace('/RenderProducts/render2');
                    break;
                case '4':
                    router.replace('/RenderProducts/render2');
                    break;
                default:
                    break;
            }
        };

        return (
            <TouchableOpacity style={styles.card2} onPress={handleCardPress2}>
            <Image source={item.image} style={styles.cardImage2} />
            <PoppinsText style={styles.cardTitle}>{item.title}</PoppinsText>
            <PoppinsText style={styles.cardPrice}>{item.price}</PoppinsText>
            <TouchableOpacity onPress={toggleHeartFill}>
                <Icon
                    name={isHeartFilled ? 'heart' : 'heart-o'}
                    size={19}
                    color={isHeartFilled ? '#FF7315' : 'grey'}
                    style={styles.heartIcon}
                />
            </TouchableOpacity>
        </TouchableOpacity>
        );
    };



    return (


        <SafeAreaView style={styles.container}>

            {/* <Hamburger style={styles.hamburgerPosition} /> */}
            <FlatList
                data={images}
                renderItem={renderCardItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.cardList}
            />

            <FlatList
                data={images2}
                renderItem={renderCardItem2}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.cardList2}
            />

            <ScrollView style={styles.scrollView}>
                <Scroll />
            </ScrollView>

            <TextInput
                style={styles.searchBar}
                placeholder="Search...."
                placeholderTextColor="white" 
                value={searchQuery}
                onChangeText={setSearchQuery}
            />

            <PoppinsText style={styles.categtitle}>Discover</PoppinsText>
            <PoppinsText style={styles.featuredtitle}>Featured Products</PoppinsText>
            {/* <NavBar /> */}

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
        alignItems: 'center',
    },

    scrollView: {
        position: 'absolute',
        bottom: height * 0.71,
    },
    scrollViewStyle: {

    },
    searchBar:{
        position:'absolute',
        width: '80%',
        height: '3%',
        borderColor:'white',
        borderWidth:2,
        borderRadius:60,
        fontSize: moderateScale(10),
    },

    categtitle: {
        position: 'absolute',
        justifyContent: 'center',
        bottom: '71%',
        fontWeight: 'bold',
        fontSize: moderateScale(16),
        color: '#3A3535',

    },
    cardTitle:{
        position: 'absolute',
        justifyContent: 'center',
        bottom: '28%',
        fontWeight: 'bold',
        fontSize: moderateScale(14),
        color: '#3A3535',
    },
    cardPrice:{
        position: 'absolute',
        left:'70%',
        bottom: '5%',
        fontWeight: 'bold',
        fontSize: moderateScale(9),
        color: 'black',
        backgroundColor: '#FF7315',
        borderRadius: 25,
        color: '#F4F4F4',
        paddingVertical: 5,
        paddingHorizontal: 10,
        overflow: 'hidden', 
        // height:'10%',
    },
    featuredtitle: {
        position: 'absolute',
        justifyContent: 'center',
        bottom: '42%',
        fontWeight: 'bold',
        fontSize: moderateScale(16),
        color: '#3A3535',
    },   
    heartIcon: {
        // position: 'absolute',
        right: '40%', 
        top: '450%', 
    },
  
    cardList: {
        position: 'absolute',
        bottom: '50%',
    },
    cardList2: {
        position: 'absolute',
        top: '62%',
        height: '50%',
    },
    card: {
        backgroundColor: '#F4F4F4',
        borderRadius: 20,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: width * 0.50,
        height: height * 0.195,
        alignItems: 'center',
        justifyContent: 'center',

    },
    card2: {
        backgroundColor: '#F4F4F4',
        borderRadius: 20,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        width: width * 0.50,
        height: height * 0.25,
        alignItems: 'center',
        justifyContent: 'center',

    },
    cardImage: {
        position: 'absolute',
        width: width * 0.50,
        height: height * 0.19,
        resizeMode: 'cover',
        borderRadius: 10,
        top: '2%',
    },

    cardImage2: {
        position: 'absolute',
        width: width * 0.50,
        height: height * 0.15,
        resizeMode: 'cover',
        borderRadius: 10,
        top: '0%',
    },
});

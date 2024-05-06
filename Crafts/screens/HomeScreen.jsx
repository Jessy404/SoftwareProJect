import { View, Text, StyleSheet, Dimensions, Image, ScrollView, TextInput, FlatList, TouchableOpacity, } from 'react-native';
import { React, useState } from 'react';
import Scroll from '../components/ScrollView/ScrollView';
import NavBar from "../components/NavBar/NavBar";
import Hamburger from "../components/Hamburger/Hamburger";
import { router } from "expo-router";
import { MonoText } from '../components/StyledText';
import Icon from 'react-native-vector-icons/FontAwesome';



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
        { id: '1', image: require('../assets/featured products/03.jpg'), },
        { id: '2', image: require('../assets/featured products/02.jpg'), },
        { id: '3', image: require('../assets/featured products/04.jpg'), },
        { id: '4', image: require('../assets/featured products/01.jpg'), },
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
            </TouchableOpacity>
        );
    };



    return (


        <View style={styles.container}>

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
            {/* <MonoText style={styles.producttext}>Beautiful and modern handmade</MonoText> */}
            {/* <View style={styles.productPriceContainer}>
                <MonoText style={styles.productPriceText}>EGP 999.00</MonoText>
                <TouchableOpacity onPress={toggleHeartFill}>
                <Icon
                    name={isHeartFilled ? 'heart' : 'heart-o'}
                    size={19}
                    color={isHeartFilled ? 'purple' : 'grey'}
                    style={styles.heartIcon}
                />
            </TouchableOpacity>

            </View>
             */}


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

            <MonoText style={styles.categtitle}>Discover</MonoText>
            <MonoText style={styles.featuredtitle}>Featured Products</MonoText>
            <View style={styles.flatscrollcontanier}></View>
            <NavBar />

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },

    },
    scrollView: {
        position: 'absolute',
        bottom: height * 0.75,
    },
    scrollViewStyle: {

    },

    categtitle: {
        position: 'absolute',
        justifyContent: 'center',
        bottom: '71%',
        fontWeight: 'bold',
        fontSize: moderateScale(16),
        color: 'black',

    },
    featuredtitle: {
        position: 'absolute',
        justifyContent: 'center',
        bottom: '42%',
        fontWeight: 'bold',
        fontSize: moderateScale(16),
        color: 'black',
    },
    producttext: {
        position: 'absolute',
        // justifyContent: 'center',
        bottom: '19.5%',
        fontWeight: 'bold',
        fontSize: moderateScale(11),
        color: 'black',
        right: '49.5%',
    },
    productPriceContainer: {
        position: 'absolute',
        bottom: '13%',
        right: '49.5%',
        backgroundColor: 'purple', 
        borderRadius: 25, 
        paddingVertical: 5, 
        paddingHorizontal: 10, 
    },
    productPriceText: {
        fontWeight: 'bold',
        fontSize: moderateScale(9),
        color: 'white',
        textAlign: 'center', 
    },
    heartIcon: {
        position: 'absolute',
        right: '280 %', 
        bottom: '50%'    , 
    },
    // hamburgerPosition: {
    //     position: 'absolute',
    //     top: 40,
    //     left: 20,
    // },
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
        backgroundColor: 'white',
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
        backgroundColor: 'white',
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

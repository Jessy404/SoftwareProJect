import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Pressable, TextInput,Dimensions } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import NavBar from '../../components/NavBar/NavBar';
const scale = size => (width / guidelineBaseWidth) * size;
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const { width, height } = Dimensions.get('window');
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;
const Decore = {
    '1': {
        id: '1',
        name: 'Decorative Plates',
        price: 'EGP 930.00',
        mainImage: 'https://eg-rv.homzmart.net/catalog/product/w/p/wp104_1_1024x1024_.jpg',
        additionalImages: [
            'https://eg-rv.homzmart.net/catalog/product/w/p/wp104_2_1024x1024_.jpg',
            'https://eg-rv.homzmart.net/catalog/product/w/p/wp104_3_1024x1024_.jpg',
        ],
        description: 'Decorative Plates Set - 4 Pieces - Multicolor - DRTV.wp104',
        rating: 5,
    },
    '2': {
        id: '2',
        name: 'ROO.ART.W.AW073 Towel Holder',
        price: 'EGP 1,119.00',
        mainImage: 'https://i.etsystatic.com/18424646/r/il/e44634/5902110444/il_794xN.5902110444_sfuy.jpg',
        additionalImages: [
            'https://i.etsystatic.com/18424646/r/il/aba704/5902094224/il_794xN.5902094224_hf57.jpg',
            'https://i.etsystatic.com/18424646/r/il/54981c/5950174203/il_794xN.5950174203_lgrq.jpg',
        ],

        description: 'ROO.ART.W.AW073 Towel Holder - Brown - 28 x 15 x 60 cm',
        rating: 5,
    },
    '3': {
        id: '3',
        name: 'FEKHM.FKH0033 Wall Accessory',
        price: 'EGP 695.00',
        mainImage: 'https://eg-rv.homzmart.net/catalog/product/f/k/fkh0033-en.jpg',
        additionalImages: [
            'https://eg-rv.homzmart.net/catalog/product/f/k/fkh0033-en.jpg',
            
        ],
        description: 'FEKHM.FKH0033 Wall Accessory 60x65 cm - Beige',
        rating: 4,
    },
    '4': {
        id: '4',
        name: 'UNI.GAL.008 Wall accessory ',
        price: 'EGP 725.00',
        mainImage: 'https://eg-rv.homzmart.net/catalog/product/0/0/008_resized_pdp_1.jpg',
        additionalImages: [
            'https://eg-rv.homzmart.net/catalog/product/0/0/008_modified_transparent_1_1.jpg',
            'https://eg-rv.homzmart.net/catalog/product/0/0/008_modified_whitebg_1_1.png',
        ],
        description: 'UNI.GAL.008 Wall accessory - gold and light blue',
        rating: 5,
    },
    '5': {
        id: '5',
        name: 'AHvn1 Wall Accessory handmade',
        price: 'EGP 637.00',
        mainImage: 'https://eg-rv.homzmart.net/catalog/product/v/n/vn_01.jpg',
        additionalImages: [
            'https://eg-rv.homzmart.net/catalog/product/v/n/vn_01_wh.jpg',
            'https://eg-rv.homzmart.net/catalog/product/v/n/vn_01_scale.jpg',
        ],
        description: 'AHvn1 Wall Accessory 40x40x40x4 cm - Multi Color',
        rating: 3,
    },
    '6': {
        id: '6',
        name: 'WA.M.576-4 Canvas wall frame',
        price: 'EGP 988.00',
        mainImage: 'https://eg-rv.homzmart.net/catalog/product/5/7/576_2.jpg',
        additionalImages: [
            'https://eg-rv.homzmart.net/catalog/product/8/0/80_resized_copy__2.png',
            'https://eg-rv.homzmart.net/catalog/product/5/7/576-4.jpg',
        ],
        description: 'WA.M.576-4 Canvas wall frame, 120×80 cm - Multi ',
        rating: 5,
    },
    '7': {
        id: '7',
        name: 'Plant pot 140 x 35 x 35 cm - gold and white - ANT.st11',
        price: 'EGP 1,817.00',
        mainImage: 'https://eg-rv.homzmart.net/catalog/product/a/n/ant.st111.jpg',
        additionalImages: [
            'https://eg-rv.homzmart.net/catalog/product/a/n/ant.st111.jpg',
           
        ],
        description: 'Plant pot 140 x 35 x 35 cm - gold and white - ANT.st11',
        rating: 4,
    },
    '8': {
        id: '8',
        name: 'AHCL31S Wall Clock 40x40x40 cm - Multi Color',
        price: 'EGP 530.00',
        mainImage: 'https://eg-rv.homzmart.net/catalog/product/3/1/31_copy_2__2.jpg',
        additionalImages: [
            'https://eg-rv.homzmart.net/catalog/product/c/l/cl_31s-0-.jpg',
            'https://eg-rv.homzmart.net/catalog/product/c/l/cl_31l.jpg',
        ],
        description: 'AHCL31S Wall Clock 40x40x40 cm - Multi Color',
        rating: 5,
    },
};
const CartContext = React.createContext();
export default function HoDecore() {
    const [searchQuery, setSearchQuery] = useState(''); 
    const [favorites, setFavorites] = useState([]);
    const [cart, setCart] = useState([]); 
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const cartContext = useContext(CartContext);
    const decore = Decore[id];
    const addToCart = (decore) => {
        if (cartContext) {
            cartContext.addToCart(decore); // Add product to the cart
        }
    };
    if (!decore) {
        return (
            <View style={styles.container}>
                <Text>Product not found.</Text>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
    const renderRating = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FontAwesome
                    key={i}
                    name={i <= rating ? 'star' : 'star-o'} // Filled or empty star
                    size={24}
                    color={i <= rating ? '#874CCC' : '#ccc'} // Gold for filled, gray for empty
                    style={styles.star}
                />
            );
        }
        return stars;
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.push('/')}>
                <Text style={styles.backToHomeText}>Craft</Text>
            </TouchableOpacity>
         
            <Image source={{ uri: decore.mainImage }} style={styles.productImage} />
            <View style={styles.additionalImagesContainer}>
                {decore.additionalImages.map((image, index) => (
                    <Image key={index} source={{ uri: image }} style={styles.additionalImage} />
                ))}
            </View>
            <Text style={styles.productName}>{decore.name}</Text>

            <Text style={styles.productPrice}>{decore.price}</Text>
            <Text style={styles.productDescription}>{decore.description}</Text>
            <View style={styles.ratingContainer}>
                {renderRating(decore.rating)}
            </View >
            <View >
                <TouchableOpacity onPress={() => addToCart(decore)} style={styles.addtocartButton}>
                    <Text style={styles.addtocartButtonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
            <NavBar/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    productName: {
        fontSize: scale(18),
        textAlign: 'center',
        color: 'black',
        fontWeight: "bold"
    },
    productPrice: {
        fontSize: 18,
        color: 'black',
    },
    ratingContainer: {
        flexDirection: 'row', // Aligns stars in a row
        alignItems: 'center', // Vertical alignment
        marginVertical: 16, // Space between rating and other content
    },

    star: {
        marginHorizontal: 2,
    },
    ratingText: {
        fontSize: 16,
        color: '#053B50',
    },
    ratingNumber: {
        fontSize: 16,
        color: '#053B50',
        marginLeft: 10,
    },
    additionalImagesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 16, // Space between images
    },
    additionalImage: {
        width: 150,
        height: 150,
        borderRadius: 5,
        marginHorizontal: 10, // Space between images
    },
    addtocart: {
        justifyContent: 'center',
        color: '#10439F',
        fontSize: 17,
        width: 175,

    },
    searchBar: {
        height: 40,
        width: 400,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 16,
        borderColor: '#10439F',
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

    },
    productImage: {
        width: 180,
        height: 180,
        alignSelf: 'center',
    },

    productDescription: {
        fontSize: 16,
        color: '#666',
        marginVertical: 16,
    },
    addtocartButton: {
        backgroundColor: '#10439F',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',

    },
    addtocartButtonText: {
        color: 'white',
        fontWeight: 'bold',
        width: 250,
        height: 30,
        textAlign: 'center',
        paddingHorizontal: 40,
        paddingBottom: 4,
    },

});


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
const products = {
    '1': {
        id: '1',
        name: 'TEXTURED DROP EARRINGS',
        price: 'EGP 220.00',
        mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw77c7e0a6/images/large/03_30105460021_2.jpg?sw=663&sh=848&sm=cut',
        additionalImages: [
            'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw6dffdebf/images/large/01_30105460021_1.jpg?sw=663&sh=848&sm=cut',
            'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwf43f6b13/images/large/05_30105460021_5.jpg?sw=663&sh=848&sm=cut',
        ],
        description: 'Beautiful textured drop earrings perfect for any occasion.',
        rating: 3,
    },
    '2': {
        id: '2',
        name: 'MATTE OVAL EARRINGS',
        price: 'EGP 185.00',
        mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw6c9d4ae9/images/large/02_30103170008_2.jpg?sw=663&sh=848&sm=cut',
        additionalImages: [
            'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw3d328a7c/images/large/01_30103170008_1.jpg?sw=663&sh=848&sm=cut',
            'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwea97f116/images/large/05_30103170008_5.jpg?sw=663&sh=848&sm=cut',
        ],


        description: 'MATTE OVAL EARRINGS',
        rating: 4,
    },
    '3': {
        id: '3',
        name: 'INLAY HOOP EARRINGS',
        price: 'EGP 230.00',
        mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwf0e21880/images/large/03_30105430004_2.jpg?sw=663&sh=848&sm=cut',
        additionalImages: [
            'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwccc104e1/images/large/05_30105430004_5.jpg?sw=1920&sh=2460&sm=cut',
            'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw1b393395/images/large/01_30105430004_1.jpg?sw=663&sh=848&sm=cut',
        ],
        description: 'MOTHER OF PEARL INLAY HOOP EARRINGS',
        rating: 1,
    },
    '4': {
        id: '4',
        name: '2-PACK SEED BEAD RINGS GOLD',
        price: 'EGP 320.00',
        mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dweaa8489c/images/large/01_30108020021_1.jpg?sw=663&sh=848&sm=cut',
        additionalImages: [
            'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw9bd2ce5b/images/large/02_30108020021_2.jpg?sw=663&sh=848&sm=cut',
            'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw3a936ffe/images/large/05_30108020021_5.jpg?sw=663&sh=848&sm=cut',
        ],
        description: 'Ring stacks deserve a bit of colour too, so opt for this duo to brighten things up. Designed in gold-tone metal, theyre designed with red and blue seed beading on a wavy ring profile. Two included. Gold',
        rating: 5,
    },
    '5': {
        id: '5',
        name: '3-PACK MOLTEN STUDS',
        price: 'EGP 230.00',
        mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw59e292ee/images/large/02_30105540008_2.jpg?sw=663&sh=848&sm=cut',
        additionalImages: [
            'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwed021d96/images/large/01_30105540008_1.jpg?sw=663&sh=848&sm=cut',
            'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw73a593fb/images/large/05_30105540008_5.jpg?sw=663&sh=848&sm=cut',
        ],
        description: 'Set in molten gold-tone metal, these studs display twinkly, faceted stones in oceanic hues. Just add sunshineNon-refundable.',
        rating: 3,
    },
    '6': {
        id: '6',
        name: 'MOLTEN DROP EARRINGS',
        price: 'EGP 185.00',
        mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwc75119c8/images/large/01_30108050021_1.jpg?sw=663&sh=848&sm=cut',
        additionalImages: [
            'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw85570527/images/large/03_30108050021_2.jpg?sw=663&sh=848&sm=cut',
            'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwb74475df/images/large/05_30108050021_5.jpg?sw=663&sh=848&sm=cut',
        ],
        description: 'Mesmerising molten cascades from these earrings, designed in gold-tone metal. Tuck your hair behind your ears to show them off Non-refundable',
        rating: 4,
    },
    '7': {
        id: '7',
        name: 'LEAF DROP ANKLET',
        price: 'EGP 140.00',
        mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw403ddfec/images/large/01_30100360008_1.jpg?sw=663&sh=848&sm=cut',
        additionalImages: [
            'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw8df0cebd/images/large/03_30100360008_2.jpg?sw=663&sh=848&sm=cut',
            'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw53e481d7/images/large/05_30100360008_5.jpg?sw=663&sh=848&sm=cut',
        ],
        description: ' Which way to the beach? Stationed with leafy charms green beads, this anklet is designed in shiny gold-tone metal.',
        rating: 5,
    },
    '8': {
        id: '8',
        name: 'RESIN INLAY DROP EARRINGS',
        price: 'EGP 250.00',
        mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw56ecb162/images/large/01_30105410008_1.jpg?sw=663&sh=848&sm=cut',
        additionalImages: [
            'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw5eabf6c1/images/large/03_30105410008_2.jpg?sw=663&sh=848&sm=cut',
            'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw3051c037/images/large/05_30105410008_5.jpg?sw=663&sh=848&sm=cut',
        ],
        description: 'Keep it contemporary with these resin hoop earrings. The sage green hoop charm boasts a gold-tone inlay, hanging from a simple molten stud.Non-refundable.',
        rating: 5,
    },
};
const CartContext = React.createContext();
export default function ProductDetail() {
    const [searchQuery, setSearchQuery] = useState(''); // State to store search input
    const [favorites, setFavorites] = useState([]);
    const [cart, setCart] = useState([]); // State to track cart items
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const cartContext = useContext(CartContext);
    const product = products[id];
    const addToCart = (product) => {
        if (cartContext) {
            cartContext.addToCart(product); // Add product to the cart
        }
    };
    if (!product) {
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
          

            {/* Display filtered product list */}
            <Image source={{ uri: product.mainImage }} style={styles.productImage} />
            <View style={styles.additionalImagesContainer}>
                {product.additionalImages.map((image, index) => (
                    <Image key={index} source={{ uri: image }} style={styles.additionalImage} />
                ))}
            </View>
            <Text style={styles.productName}>{product.name}</Text>

            <Text style={styles.productPrice}>{product.price}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
            <View style={styles.ratingContainer}>
                {renderRating(product.rating)}
            </View >
            <View >
                <TouchableOpacity onPress={() => addToCart(product)} style={styles.addtocartButton}>
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
        paddingTop: scale(10),
    },
    addtocartButtonText: {
        color: 'white',
        fontWeight: 'bold',
        width: 250,
        height: 30,
        textAlign: 'center',
        paddingHorizontal: 40,
        paddingBottom: 4,
        paddingTop: scale(6),
    },

});


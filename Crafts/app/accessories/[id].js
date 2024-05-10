import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Pressable, TextInput } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { db } from '@/firebase/config';
import { addToCart } from '@/firebase/apis/cart';
import CartScreen from '@/screens/CartScreen';

const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export default function ProductDetail() {
    const products = db.collection('products');
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const product = products.doc(id).get().data();

    if (!product) {
        return (
            <View style={styles.container}>
                <Text style={{ flex: 1, textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>Product not found.</Text>
                <View style={styles.header}>
                    <Pressable
                        style={styles.BackButton}
                        onPress={() => router.replace("/(tabs)/home")}
                    >
                        <Ionicons name="arrow-back" size={28} color="black" />
                    </Pressable>
                </View>
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
    const handelAddtoCart = async () => {
        const { id } = useLocalSearchParams();
        const product = products.doc(id).get().data();
        await addToCart(product);
        router.push(CartScreen)
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable
                    style={styles.BackButton}
                    onPress={() => router.replace("/RenderProducts/render")}
                >
                    <Ionicons name="arrow-back" size={28} color="black" />
                </Pressable>
            </View>

            <Image source={{ uri: product.mainImage }} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
            <View style={styles.ratingContainer}>
                {renderRating(product.rating)}
            </View >
            <TouchableOpacity onPress={handelAddtoCart} style={styles.addtocartButton}>
                <Text style={styles.addtocartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F4F4F4',
        width: '100%',
    },
    productName: {
        fontSize: moderateScale(20),
        textAlign: 'center',
        color: '#3A3535',
        fontWeight: "bold",
        marginVertical: 16,
    },
    productPrice: {
        fontWeight: 'bold',
        fontSize: moderateScale(12),
        color: '#3A3535',
        marginVertical: 16,
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
        color: '#3A3535',
    },
    ratingNumber: {
        fontSize: 16,
        color: '#3A3535',
        marginLeft: 10,
    },
    header: {
        flexDirection: 'row',
        padding: 10,
        gap: 20,
    },
    BackButton: {
        padding: 10,
    },
    addtocartButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF7315',
        padding: 10,
        borderRadius: 5,
        width: width,
    },
    addtocartButtonText: {
        color: 'white',
        fontWeight: 'bold',
        width: 250,
        height: 40,
        textAlign: 'center',
        paddingHorizontal: 40,
        paddingBottom: 4,
        fontSize: moderateScale(20),
    },
    productImage: {
        width: 250,
        height: 200,
        alignSelf: 'center',
        marginVertical: 16,
    },

    productDescription: {
        fontSize: 16,
        color: '#3A3535',
        marginVertical: 16,
    },
});


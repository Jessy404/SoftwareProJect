import { View, Text, StyleSheet, FlatList, Image, SafeAreaView, Dimensions, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '@/firebase/auth'
import { incrementCartItem, removeFromCart } from '@/firebase/apis/cart'

const initData = [
    {
        id: '1',
        name: 'TEXTURED DROP EARRINGS',
        price: 220,
        mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw77c7e0a6/images/large/03_30105460021_2.jpg?sw=663&sh=848&sm=cut',
        quantity: 10
    },
    {
        id: '2',
        name: 'MATTE OVAL EARRINGS',
        price: 185,
        mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw6c9d4ae9/images/large/02_30103170008_2.jpg?sw=663&sh=848&sm=cut',
        quantity: 10
    },
    {
        id: '3',
        name: 'INLAY HOOP EARRINGS',
        price: 230,
        mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwf0e21880/images/large/03_30105430004_2.jpg?sw=663&sh=848&sm=cut',
        quantity: 10
    },
    {
        id: '4',
        name: '2-PACK SEED BEAD RINGS',
        price: 320,
        mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwf0e21880/images/large/03_30105430004_2.jpg?sw=663&sh=848&sm=cut',
        quantity: 10

    },
    {
        id: '5',
        name: '3-PACK MOLTEN STUDS',
        price: 230,
        mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw59e292ee/images/large/02_30105540008_2.jpg?sw=663&sh=848&sm=cut',
        quantity: 10
    },
    {
        id: '6',
        name: 'MOLTEN DROP EARRINGS',
        price: 185,
        mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwc75119c8/images/large/01_30108050021_1.jpg?sw=663&sh=848&sm=cut',
        quantity: 10
    },
    {
        id: '7',
        name: 'LEAF DROP ANKLET',
        price: 140,
        mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw403ddfec/images/large/01_30100360008_1.jpg?sw=663&sh=848&sm=cut',
        quantity: 10
    },
    {
        id: '8',
        name: 'RESIN INLAY DROP EARRINGS',
        price: 250,
        mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw56ecb162/images/large/01_30105410008_1.jpg?sw=663&sh=848&sm=cut',
        quantity: 10
    },
]

const { width, height } = Dimensions.get('window');

export default function CartScreen() {
    const [cartItems, setCartItems] = useState(initData);
    const user = useAuth();
    const userId = user.user?.uid;


    const handleDeleteFromCart = (itemId) => {
        removeFromCart(userId, itemId);
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== itemId));
    };

    const handledIncreaseQuantity = async (itemId) => {
        try {
            await incrementCartItem(userId, itemId);
        } catch (error) {
            Alert.alert(error.message);
        }
        setCartItems(cartItems.map((cartItem) => cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable
                    style={styles.BackButton}
                    onPress={() => router.back()}
                >
                    <Ionicons name="arrow-back" size={24} color="black" />
                </Pressable>
                <Text style={styles.Title}>Cart Page</Text>
            </View>
            <View style={styles.FlatListContiner}>
                <FlatList
                    style={styles.CartList}
                    data={cartItems}
                    renderItem={({ item }) => <CartItem item={item} setCartItems={setCartItems} cartItems={cartItems} handleDeleteFromCart={handleDeleteFromCart} handledIncreaseQuantity={handledIncreaseQuantity} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View style={styles.outer}>
                {/* <NavBar /> */}
            </View>
        </SafeAreaView>
    )
}

const CartItem = ({ item, setCartItems, cartItems, handleDeleteFromCart, handledIncreaseQuantity }) => {

    const handleDelete = () => {
        Alert.alert("Delete", "Are you sure you want to delete this item?", [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
            },
            {
                text: "OK",
                onPress: () => setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id)),
            },
        ]);
    };

    const handleIncreaseQuantity = async () => {
        try {
            await incrementCartItem(userId, item.id);
        } catch (error) {
            Alert.alert(error.message);
        }
        setCartItems(cartItems.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
    };

    return (
        <View style={styles.ItemContainer} >
            <Image style={styles.ItemImage} source={{ uri: item.mainImage }} />
            <Text style={styles.ItemNameText}>{item.name}</Text>
            <View style={{
                flexDirection: "row",
                gap: 40,
            }}>
                <View style={styles.ItemTextContiner}>
                    <Text style={styles.ItemPriceText}><Text style={{ fontWeight: 'bold' }}>Price: </Text>{item.price.toFixed(2)}</Text>
                    <Text style={styles.ItemQuantityText}><Text style={{ fontWeight: 'bold' }}>Quantity: </Text> {item.quantity}</Text>
                </View>
                <View style={styles.CartIconContainer}>
                    <Pressable
                        style={styles.CarBtn}
                        onPress={handleDeleteFromCart}

                    >
                        <Text>Delete</Text>
                        <Ionicons name="close-circle-outline" size={24} color="red" />
                    </Pressable>
                    <Pressable
                        style={styles.CarBtn}
                        onPress={handledIncreaseQuantity}
                    >
                        <Text>Add More</Text>
                        <Ionicons name="add-circle-sharp" size={24} color="blue" />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outer: {
        position: 'absolute',
        width: width,
        height: height,
        top: 0,
        left: 0,
    },
    container: {
        flex: 1,
        width: width,
        height: height,
    },
    header: {
        flexDirection: 'row',
        padding: 10,
        gap: 20,
    },
    BackButton: {
        padding: 10
    },
    Title: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    text: {
        alignSelf: 'center',
    },
    FlatListContiner: {
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    CartList: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        width: width,
        height: height,
        marginBottom: 40,
    },
    ItemContainer: {
        backgroundColor: '#EEE',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: "90%",
        maxWidth: 450,
        padding: 10,
        marginBottom: 10,
        borderRadius: 15,
    },
    ItemTextContiner: {
        justifyContent: 'space-around',
        gap: 1,
    },
    ItemNameText: {
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize: 20,
    },
    ItemPriceText: {
        fontSize: 16,
    },
    ItemQuantityText: {
        fontSize: 16,
    },
    ItemImage: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    CartIconContainer: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: 2,
    },
    CarBtn: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 3,
    },
    CarBtnDelete: {
        backgroundColor: "red",
    },
    CarBtnAdd: {
        backgroundColor: "red",
    }

});




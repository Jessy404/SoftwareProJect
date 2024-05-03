import { View, StyleSheet, Pressable, ImageBackground, } from "react-native";

export default function CartItem({ product, onPress, onDelete }) {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}>
                <View style={styles.imageContainer}>
                    <ImageBackground
                        source={{ uri: product.image }}
                        style={styles.image}
                    />
                </View>
            </Pressable>
            <View style={styles.info}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>$ {product.price}</Text>
            </View>
            <Pressable style={styles.delete} onPress={onDelete}>
                <Text style={styles.deleteText}>X</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 10,
        overflow: "hidden",
        marginRight: 10,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    info: {
        flex: 1,
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
    },
    price: {
        fontWeight: "bold",
        fontSize: 16,
        color: "green",
    },
    delete: {
        backgroundColor: "red",
        padding: 5,
        borderRadius: 5,
    },
    deleteText: {
        color: "white",
        fontWeight: "bold",
    },
});
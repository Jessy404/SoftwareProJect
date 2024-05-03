import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TextInput, View, FlatList, Pressable } from "react-native";
import CartItem from "./CartItem";
import { useRouter } from "expo-router";

export default function Cart() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const searchItems = () => {
    setLoading(true);
    const newData = data.filter((user) => user.name.toLowerCase().includes(text.toLowerCase()));
    setData(newData);
    setLoading(false);
  };

  const deleteFromCart = (productId) => {
    const newCart = data.filter(u=>u.id!==productId); 
    setData(newCart);
  }

  return (
    <View style={styles.top}>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          placeholder="Search for"
          onChangeText={setText}
          value={text}
          onSubmitEditing={searchItems}
        />
        <Pressable onPress={searchItems}>
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.text}>Search</Text>
          )}
        </Pressable>
      </View>
      <FlatList
        data={data}
        renderItem={({ item: product }) => (
          <CartItem
            product={product}
            onPress={() => router.navigate(`/products/${product.id}`)}
            onDelete={() => deleteFromCart(product.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
    margin: 5,
    padding: 15,
    width: "100%",
  },
  search: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    margin: 5,
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    fontSize: 32,
  },
  text: { color: "white" },
});



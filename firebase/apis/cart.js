import { collection, deleteDoc, doc, getDoc, getDocs, limit, query, setDoc, updateDoc, where } from "@firebase/firestore";
import { db } from "../config";



export const getCart = async (userId) => {
    const q = query(collection(db, "carts"), where("userId", "==", userId), limit(1));
    const querySnapshot = await getDocs(q);
    const cart = querySnapshot.docs[0];
    return cart;
};

export const deleteCart = async (cartId) => {
    const cartRef = doc(db, "carts", cartId);
    await deleteDoc(cartRef);
};

export const addToCart = async (userId, id, name, quantity = 1, price, mainImage) => {
    let cart = await getCart(userId);
    if (!cart) {
        cart = await createCart(userId);
    }
    const cartItemsRef = doc(db, "carts", cart.id, "items");
    const cartItemRef = doc(cartItemsRef);
    const cartItemData = {
        id,
        name,
        quantity,
        mainImage,
        price,
    };
    await setDoc(cartItemRef, cartItemData);
};

export const createCart = async (userId) => {
    const cartRef = doc(collection(db, "carts"));
    await setDoc(cartRef, { userId });
    console.log("Cart created:", cartRef.id);
    return cartRef;
};

const snapshotToData = (snapshot) => {
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
}

export const getCartItems = async (cartId) => {
    const cartItemsRef = doc(db, "carts", cartId, "items");
    const querySnapshot = await getDocs(collection(cartItemsRef));
    const cartItems = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return cartItems;
};

export const updateCartItem = async (itemId, quantity) => {
    const cartItemRef = doc(db, "carts", itemId);
    const cartItemSnap = await getDoc(cartItemRef);
    if (cartItemSnap.exists()) {
        await updateDoc(cartItemRef, { quantity });
    }
};

export const removeFromCart = async (itemId) => {
    const cartItemRef = doc(db, "carts", "items", itemId);
    await deleteDoc(cartItemRef);
};


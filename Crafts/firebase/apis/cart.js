import { doc, collection, getDocs, getDoc, setDoc, updateDoc, deleteDoc, query, where, limit } from "@firebase/firestore";
import { db } from "../config";

export const getCart = async (userId) => {
    const q = query(collection(db, "carts"), where("userId", "==", userId), limit(1));
    const snapshot = await getDocs(q);
    return snapshotToData(snapshot.docs[0]);
};
export const incrementCartItem = async (cartId, itemId, incrementBy = 1) => {
        const cartItemsRef = doc(db, "carts", cartId, "items", itemId);
        const cartItem = await getDoc(cartItemsRef);
        if (cartItem.exists()) {
            const newQuantity = cartItem.data().quantity + incrementBy;
            await updateDoc(cartItemsRef, {
                quantity: newQuantity,
            });
        }
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
    const cartItemsRef = doc(db, "carts", cart.id, "items", id);
    const cartItemData = {
        id,
        name,
        quantity,
        mainImage,
        price,
    };
    await setDoc(cartItemsRef, cartItemData, { merge: true });
};

export const createCart = async (userId) => {
    const cartRef = doc(collection(db, "carts"));
    const cartData = { userId };
    await setDoc(cartRef, cartData);
    console.log("Cart created:", cartRef.id);
    return cartRef;
};

export const getCartItems = async (cartId) => {
    const cartItemsRef = collection(doc(db, "carts", cartId), "items");
    const snapshot = await getDocs(cartItemsRef);
    return snapshot.docs.map(snapshotToData);
};

export const updateCartItem = async (cartId, itemId, quantity) => {
    const cartItemRef = doc(db, "carts", cartId, "items", itemId);
    await updateDoc(cartItemRef, { quantity });
};

export const removeFromCart = async (cartId, itemId) => {
    const cartItemRef = doc(db, "carts", cartId, "items", itemId);
    await deleteDoc(cartItemRef);
};

const snapshotToData = (snapshot) => {
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
}


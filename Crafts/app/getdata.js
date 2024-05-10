import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";

async function getProducts() {
  const querySnapshot = await getDocs(collection(db, "categoryone"));

  querySnapshot.forEach((doc) => {
    console.log("Document ID:", doc.id);
    console.log("Product Data:", doc.data()); 
  });
}

getProducts();

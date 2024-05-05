import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

async function getProducts() {

const querySnapshot = await getDoc(collection(db, "products"));
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.products());
});

  if (docSnap.exists()) {
    console.log("products:", docSnap.products());
  } else {
    console.log("No such document!");
  }
}

getProducts();
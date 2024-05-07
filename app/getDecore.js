import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
async function getDecore() {
    const querySnapshot = await getDoc(collection(db, "Decore"));
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.decore());
      });

      if (docSnap.exists()) {
        console.log("decore:", docSnap.decore());
      } else {
        console.log("No such document!");
      }
    }

    getDecore();
import { auth } from "./config";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
} from "firebase/auth";
// Listen for authentication state to change.
onAuthStateChanged(auth, (user) => {
    if (user != null) {
        console.log("We are authenticated now!");
    }

    // Do other things
});

async function register(email, password) {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    return cred;
}

async function login(email, password) {
    await signInWithEmailAndPassword(auth, email, password);
}
async function sendEmail( email){
await   sendPasswordResetEmail (auth,email) ;
}

export { register, login ,sendEmail };     
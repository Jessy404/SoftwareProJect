import { StyleSheet, TextInput, Button, Alert, Pressable } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebase/config';
import { Text, View } from '@/components/Themed';
import { useState } from 'react';
import { Link } from 'expo-router';
import { doc, setDoc , addDoc , collection} from 'firebase/firestore';

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const handelSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       
        const user = userCredential.user;
        console.log(" creating done")
        addUserToDatabase();
        docRef();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  const addUserToDatabase = async () => {
    if (auth.currentUser)
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      name: name,
      email : email ,
      phone : phone

    });
  }
  const docRef = async () => {
    if (auth.currentUser)
    await addDoc(collection(db, `users/${auth.currentUser.uid}/Chatlist`),{
  name : name 
    });
    console.log("Document written with ID: ", docRef.id);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.inputView}>
        {/* <TextInput style={styles.input}
          placeholder="First name"
          placeholderTextColor="#9D23CF"
        /> */}

        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#0E46A3"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#0E46A3"
          value={email}
          onChangeText={setEmail}

        />
         <TextInput
          style={styles.input}
          placeholder="Phone"
          placeholderTextColor="#0E46A3"
          value={phone}
          onChangeText={setPhone}

        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#0E46A3"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View style={styles.buttonView}>
          <Pressable style={styles.button} onPress={handelSignUp}>
            <Text style={styles.buttonText}>Register</Text>
          </Pressable>
          <View style={styles.sideBySide}>
            <Text style={styles.text1}>
              Already have an Email ?
            </Text>
            {/* <Text style={styles.text}>
             "Register Now"
            </Text> */}

            <Link href="/(tabs)/login" style={styles.text1}> "LOGIN Now" </Link>
          </View>

        </View>
        {/* </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontWeight: "bold"
  },
  sideBySide: {

    flexDirection: "row",
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: "#0E46A3"
  },
  sep: {
    height: "10%",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  inputView: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 5
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: "#0E46A3",
    borderWidth: 1,
    borderRadius: 7
  },
  button: {
    marginTop: 40,
    marginBottom: 10,
    backgroundColor: "#0E46A3",
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: 50
  },
});

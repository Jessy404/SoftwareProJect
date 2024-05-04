import { Pressable, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { auth } from '../firebase/config';
import { Link, Stack, router } from 'expo-router';
import { useState } from 'react';
import {signInWithEmailAndPassword } from "firebase/auth";
export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")



  const handelSignin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        console.log("login done")
        const user = userCredential.user;
        router.replace("/NavScreens/home")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  return (
    <View style={styles.container}>

      <Text style={styles.title}> Login </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Email "
          placeholderTextColor="#D20062"
          value={email}
          onChangeText={setEmail}

        />


        <TextInput
          style={styles.input}
          placeholder="Enter Your Password "
          placeholderTextColor="#D20062"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View >
          <Link href= "Account/forget"  style={styles.text1}> Forget Password </Link>
          <View style={styles.buttonView}>
            <Pressable style={styles.button} onPress={handelSignin}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </Pressable>
          </View>
          <View style={styles.sideBySide}>
            <Text style={styles.text1}>
              Not a member ?
            </Text>
            {/* <Text style={styles.text}>
             "Register Now"
            </Text> */}
            <Pressable onPress={() => router.replace("Account/signup")}>
              <Text style={{ fontWeight: "bold" , color :"#D20062" }}>"Register Now"</Text>
            </Pressable>
          </View>

        </View>
      </View>


    </View>


  );
}

const styles = StyleSheet.create({

  text: {
    color: "#D20062",
    fontWeight: "bold"
  },
  text1: {
    fontWeight: "bold"
  },
  forget: {
    paddingRight: 80,
    fontWeight: "bold",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 70,
    flex: 1,
  },
  inputView: {
    gap: 20,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 5
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: "#D20062",
    borderWidth: 1,
    borderRadius: 7
  },
  sideBySide: {

    flexDirection: "row",
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: "#D20062",
  },

  button: {
    backgroundColor: "#D20062",
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  buttonView: {
    // width: "100%",
    paddingHorizontal: 50
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

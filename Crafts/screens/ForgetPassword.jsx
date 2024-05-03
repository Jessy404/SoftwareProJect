import React from 'react'
import { View  ,Text} from 'react-native'
import { StyleSheet } from 'react-native'
import { TextInput, Pressable } from 'react-native'
import { useState } from 'react'
import { router } from 'expo-router'
// import ChanagePass from "@/screens/ChanagePass"
export default function forget() {
  const [email , setEmail]= useState ("")
  const handelForget = async() => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

      try {
        if (email.trim() === "") {
          throw new Error("Email field cannot be empty.");
        }
        await sendResetEmail(email);
        setError({ code: "Check your email for the reset link." });
      } catch (error) {
        setError({ code: error.message });
      }
console.log("done");
router.replace("Account/chanagePassword")
  }
  return (
    <View style = {styles.container}>
          <Text style={styles.title}>Chanage Your Password Now </Text>

  <View style = {styles.inputView}>
  <TextInput
          style={styles.input}
          placeholder="Enter Your Email "
          placeholderTextColor="#0E46A3"
          value={email}
          onChangeText={setEmail}

        />

  </View>
  <View style={styles.buttonView}>
          <Pressable style={styles.button} onPress={handelForget}>
            <Text style={styles.buttonText}>Done</Text>
          </Pressable></View>
    </View>
  )}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text1: {
      fontWeight: "bold"
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    title: {
      fontSize: 60,
      fontWeight: 'bold',
      color: "#0E46A3"
    },
    inputView : {
        gap : 20,
        width : "100%",
        paddingHorizontal : 40,
        marginBottom  :5
      },
      input : {
        height : 50,
        paddingHorizontal : 20,
        borderColor : "#0E46A3",
        borderWidth : 1,
        borderRadius: 7
      },
      button: {
        backgroundColor: "#0E46A3",
        height: 45,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center" ,
        marginTop:10,
    marginBottom:10
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



})
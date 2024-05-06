import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { sendEmail } from "../firebase/auth";
import Icoon from 'react-native-vector-icons/FontAwesome';

const Forgetpassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const forgethandlePress = async () => {
    try {
      if (email.trim() === "") {
        throw new Error("Email field cannot be empty.");
      }
      await sendEmail(email);
      setError({ code: "Check your email for the reset link." });
    } catch (error) {
      setError({ code: error.message });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      
<View style ={styles.buttonView}>
<TouchableOpacity style={styles.button} onPress={forgethandlePress}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
</View>
      
<View style = {styles.sideBySide}>
<TouchableOpacity onPress={()=>router.replace("Account/signup")  }>
        <Text style={styles.link}>Register</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>router.replace("Account/login")}>
        <Text style={styles.link}>Login</Text>
      </TouchableOpacity>
</View>


      <TouchableOpacity style={styles.homeButton} onPress={() =>router.replace("/(tabs)")} styyle={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icoon name="home" size={35} color="#000"  />
      </TouchableOpacity>
      
      {error.code && <Text style={styles.error}>{error.code}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: "#10439F",
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: "#10439F",
    borderWidth: 1,
    borderRadius: 7
  },
  button: {
    backgroundColor: '#10439F',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 150,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  buttonView: {
    // width: "100%",
   // paddingHorizontal: 30
  },
  link: {
    marginTop: 10,
    color: '#10439F', 
marginLeft : 40 ,
alignItems: "center", 
fontWeight : "bold"
  },
  sideBySide: {
justifyContent :"center",
    flexDirection: "row",

  },
  error: {
    marginTop: 10,
    color: 'red',
  },
  homeButton: {
    position: 'absolute',
    top: 10, 
    left: 430,
    zIndex: 10, 
  },
});

export default Forgetpassword;
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions
} from "react-native";
import { sendEmail } from "../firebase/auth";
import Icoon from 'react-native-vector-icons/FontAwesome';


const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;


const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;
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
      <View style={styles.inputView}>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
              <View style={styles.buttonView}>


      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={forgethandlePress}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sideBySide}>
        <TouchableOpacity onPress={() => router.replace("Account/signup")}>
          <Text style={styles.link}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace("Account/login")}>
          <Text style={styles.link}>Sign In</Text>
        </TouchableOpacity>
      </View>


      {/* <TouchableOpacity style={styles.homeButton} onPress={() => router.replace("/(tabs)")} styyle={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icoon name="home" size={35} color="#000" />
      </TouchableOpacity> */}

      {error.code && <Text style={styles.error}>{error.code}</Text>}
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
  },
  title: {
    position:'relative',
    bottom:'10%',
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    color: "#3A3535",

  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: "#3A3535",
    borderWidth: 0.5,
    borderRadius: 20
  },
  inputView: {
    gap: 20,
    width: "100%",
    backgroundColor:'#F4F4F4',
    paddingHorizontal: 40,
    marginBottom: 5
  },
  button: {
    marginTop: 40,
    marginBottom: 10,
    backgroundColor: "#FF7315",
    height: 45,
    // borderColor: "gray",
    // borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 150,
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: 50,
    backgroundColor:'#F4F4F4',

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
    marginTop: 8,
    color: '#3A3535',
    marginLeft: 20,
    alignItems: "center",
    fontWeight: "bold",
    fontSize: moderateScale(9),

  },
  sideBySide: {
    justifyContent: "center",
    alignItems:'center',
    // flexDirection: "row",

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
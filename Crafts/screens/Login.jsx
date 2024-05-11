import { Pressable, StyleSheet, TextInput, Dimensions } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { auth } from '../firebase/config';
import { Link, Stack, router } from 'expo-router';
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
// import profile from './profile';


const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;


const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")



  const handelSignin = () => {
    // signInWithEmailAndPassword(auth, email, password)
    //   .then(() => {
    //     // Signed in 
    //     console.log("login done")
    //     if (auth.currentUser.uid == "oPaayaka98e90JVtKWByLoMLQ2z2")
    //        {
    //       router.replace("/Account/adminHome")
    //       }
    //     else
          router.replace("/(tabs)/home")

      // })

      // .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   console.log(errorMessage);
      // });
  }
  return (
    <View style={styles.container}>

      <Text style={styles.title}> Sign In </Text>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Email "
          placeholderTextColor="#3A3535"
          value={email}
          onChangeText={setEmail}

        />


        <TextInput
          style={styles.input}
          placeholder="Enter Your Password "
          placeholderTextColor="#3A3535"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>


      {/* <Link href= "Account/forget"  style={styles.text1}> Forget Password </Link> */}
      <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={handelSignin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
      </View>
      <View style={styles.sideBySide}>
        {/* <Text style={styles.text1}>
              Not a member ?
            </Text> */}
        {/* <Text style={styles.text}>
             "Register Now"
            </Text> */}
        <Pressable onPress={() => router.replace("Account/signup")}>
          <Text style={{
            position: 'relative',
            top: '40%',
            fontWeight: "bold",
            color: "#3A3535",
            // alignItems:'center',
            justifyContent: 'center',
            backgroundColor: '#F4F4F4',
            fontSize: moderateScale(9),
          }}> Register Now </Text>
        </Pressable>
        <Pressable onPress={() => router.replace("Account/forget")}>
          <Text style={{
            position: 'relative',
            top: '50%',
            fontWeight: "bold",
            color: "#3A3535",
            // alignItems:'center',
            justifyContent: 'center',
            fontSize: moderateScale(9),

          }}>Forget Password</Text>
        </Pressable>


      </View>



    </View>


  );
}

const styles = StyleSheet.create({

  text: {
    color: "#3A3535",
    fontWeight: "bold"
  },
  text1: {
    position: 'relative',
    top: '100%',
    // backgroundColor:'white',
    fontWeight: "bold",
    color: "#3A3535",
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
    backgroundColor: '#F4F4F4',
  },
  inputView: {
    gap: 20,
    width: "100%",
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 40,
    marginBottom: 5
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: "#3A3535",
    borderWidth: 0.5,
    borderRadius: 20
  },

  sideBySide: {
    position: 'relative',
    top: '6%',
    // justifyContent:'center',
    // flexDirection: "row",
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',

  },
  title: {
    position: 'relative',
    bottom: '10%',
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    color: "#3A3535",

  },

  button: {
    position: 'relative',
    backgroundColor: "#FF7315",
    top: '100%',
    width: width * 0.80,
    height: height * 0.04,
    // borderColor: "gray",
    // borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 10,
    // marginBottom: 10 ,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  buttonView: {
    // width: "100%",
    paddingHorizontal: 50,
    backgroundColor: '#F4F4F4',
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});


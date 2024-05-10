import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, VeiwMode, TextInput, Pressable } from 'react-native';
import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import Hamburger from "../components/Hamburger/Hamburger";
import { db, auth } from '../firebase/config';
import { useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { updateDoc } from "firebase/firestore";
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { throttle } from 'lodash';
import { SafeAreaView } from 'react-native-safe-area-context';
import UploadImageToFirebase from '@/app/Admin/UploadScreen';
export default function User() {


  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [VeiwMode, setVeiwMode] = useState(true)
  const updateUserData = async () => {
    const washingtonRef = doc(db, "users", auth.currentUser.uid);

    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
      name: name,
      // email: email ,
      phone: phone,

    });
  }

  const handleEditPress = () => {
    setVeiwMode(false);
  }
  const handleSavePress = () => {
    updateUserData();
    setVeiwMode(true);
  }

  const getUser = async () => {
    // if (uid)
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      const data = docSnap.data();
      setName(data.name);
      setEmail(data.email);
      setPhone(data.phone);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  {
    VeiwMode ? getUser() : null
  }
  return (
    <View style={styles.container1}>
      <>

      </>
      <ScrollView style={styles.container}>
        <Pressable
          style={styles.BackButton}
          onPress={() => router.replace("/(tabs)/home")}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <View style={styles.headerContainer}>
          <View style={styles.profileContainer}>

            <Image
              style={styles.profilePhoto}
              source={{ uri: 'https://i.pinimg.com/564x/ec/e2/47/ece24715b797dadf57292752cf502cab.jpg' }}

            />
            {/* <Text style={styles.nameText}>
              {name}
            </Text> */}

          </View>
        </View>



        {
          VeiwMode ? (
            <>
              <View style={styles.DataView}>
                <Text style={styles.nameText1}> User NAME :</Text>
                <Text style={styles.nameText}> {name}</Text>
              </View>
              <View style={styles.DataView}>
                <Text style={styles.nameText1}> EMAIL : </Text>
                <Text style={styles.nameText}>{email} </Text>
              </View>
              <View style={styles.DataView}>
                <Text style={styles.nameText1}>PHONE : </Text>
                <Text style={styles.nameText}>{phone} </Text>
              </View>
              <TouchableOpacity style={styles.button} onPress={handleEditPress}>
                <Text style={styles.buttonText}>Edit Profile</Text>
              </TouchableOpacity>
            </>
          ) :
            (
              <>
                <View style={styles.DataView}>
                  <Text style={styles.nameText1}> EMAIL : </Text>
                  <Text style={styles.nameText}>{email} </Text>
                </View>
              <SafeAreaView style={styles.inputView}>
              <TextInput
                  style={styles.input}
                  placeholder="Name"
                  placeholderTextColor="#10439F"
                  value={name}
                  onChangeText={setName}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Phone"
                  placeholderTextColor="#10439F"
                  value={phone}
                  onChangeText={setPhone}

                />
              </SafeAreaView>
                <TouchableOpacity style={styles.button} onPress={handleSavePress}>
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
              </>
            )
        }


      </ScrollView>
      {/* <NavBar /> */}
    </View>
  );

}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  BackButton: {
    padding: 50
  },
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: "#FFF",
    flex: 1,
  },
  DataView: {
    // backgroundColor: "#F4F4F4",
    paddingTop: 20,
    paddingBottom: 20,
    marginHorizontal: 40,
    marginTop: 5,
    flexDirection: "row",
    marginBottom: 5,
    gap: 20,
    borderRadius: 150,
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
    // borderColor: "#3A3535",
    borderWidth: 0.5,
    borderRadius: 150 ,
    // backgroundColor: '#F4F4F4',

  },
  coverPhoto: {
    width: '100%',
    height: 400,
  },
  profileContainer: {
    alignItems: 'center',
    // marginBottom: -140,
    borderColor: "#10439F ",
    paddingTop: 50,
    paddingBottom: 50,

  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 4,
    // borderColor: "#874CCC" ,
  },
  nameText: {
    fontSize: 18,
    marginTop: 10,
    // color :"#fff"
  },
  nameText1: {
    fontSize: 18,
    // fontWeight: 'bold',
    marginTop: 10,
    // color :"#10439F",
    // marginHorizontal: 20,


  },

  statsContainer: {
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 20,
    paddingTop: 50,
  },
  statContainer: {
    alignItems: 'center',
    flex: 1,

  },
  statCount: {
    fontSize: 18,
    // fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 18,
    // color: '#10439F',
    // fontWeight :"bold"
  },
  button: {
    backgroundColor: '#FF7315',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 150,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
};
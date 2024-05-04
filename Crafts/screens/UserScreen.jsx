import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet , VeiwMode } from 'react-native';
import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import Hamburger from "../components/Hamburger/Hamburger";
import { db, auth } from '../firebase/config';
import { useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
export default function User() {

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

//   const handleEditPress = () => {
// setVeiwMode(false);
//   }

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
  getUser();
  return (
    <View style={styles.container1}>
      <Hamburger />
      <ScrollView style={styles.container}>


        <View style={styles.headerContainer}>

          <View style={styles.profileContainer}>
            <Image
              style={styles.profilePhoto}
              source={{ uri: 'https://i.pinimg.com/564x/31/ce/4e/31ce4ec91de94fc4aa81fbf89b07c430.jpg' }}
             
            />
            {/* <Text style={styles.nameText}>
              {name}
            </Text> */}

          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statContainer}>
          <Text style={styles.statLabel}>Posts</Text>
            <Text style={styles.statCount}>1234</Text>
           
          </View>
          <View style={styles.statContainer}>
          <Text style={styles.statLabel}>orders</Text>
            <Text style={styles.statCount}>555 </Text>
       
          </View>
          <View style={styles.statContainer}>
          <Text style={styles.statLabel}>Following</Text>
            <Text style={styles.statCount}>9101</Text>
        
          </View>
        </View>

        <View style={styles.DataView}>
        <Text style={styles.nameText1}>
           User NAME :
          </Text>
          <Text style ={styles.nameText}>
          {name}
          </Text>
          </View>
          <View style={styles.DataView}>
          <Text style={styles.nameText1}>
            EMAIL : 
          </Text>
          <Text style ={styles.nameText}>
          {email}
          </Text>
          </View>
          <View style={styles.DataView}>
          <Text style={styles.nameText1}>
            PHONE : 
          </Text>
          <Text style={styles.nameText}>
          {phone}
          </Text>
        </View>
        {/* <TouchableOpacity style={styles.button} onPress={handleEditPress}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity> */}
      </ScrollView>
      <NavBar />
    </View>
  );

}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: "#D20062",
    flex: 1,
  },
  DataView: {
    backgroundColor: "#FFB5DA",
    paddingTop: 20,
    paddingBottom: 20,
    marginHorizontal : 20 ,
    marginTop : 5 ,
    flexDirection :"row",
    marginBottom : 5,
   borderWidth: 1,
    borderColor: "#D20062" ,
    borderRadius: 150,
  },
  coverPhoto: {
    width: '100%',
    height: 400,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: -140,
    borderColor: "#FFFDCB ",
    paddingTop: 50,
    paddingBottom: 50,

  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#D20062" ,
  },
  nameText: {
    fontSize: 20,
  
    marginTop: 10,
    color :"#fff"
  }, 
   nameText1: {
    fontSize: 20,
    // fontWeight: 'bold',
    marginTop: 10,
    color :"#D20062",
    marginHorizontal : 20 ,

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
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 20,
    color: '#D20062',
    fontWeight :"bold"
  },
  button: {
    backgroundColor: '#D20062',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
    marginTop : 10,
    borderRadius: 150,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
};
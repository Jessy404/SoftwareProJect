import { View, Text, StyleSheet, Dimensions, Image, ScrollView, TextInput, FlatList, TouchableOpacity, } from 'react-native';
import NavBar from "../components/NavBar/NavBar";
import React from 'react'
import { router } from "expo-router";
import Icon from 'react-native-vector-icons/Ionicons';
import { MonoText } from '../components/StyledText';

const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 350;
const baseWidth = 360;
const baseHeight = 640;
const scale = size => (width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

const userIcon = require('../assets/regular icons/user.png');
const smallScreenWidth = 400;
const iconSize = width < smallScreenWidth ? 20 : 25;


export default function HamburgerScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.userbutton} onPress={() => router.replace("/NavScreens/user")}>
        <MonoText style={styles.usertext}>My Profile</MonoText>
        <Image source={userIcon} style={styles.usericon}/>

        {/* <Icon name="sign-in" size={24} color="#000" style={styles.usericon} /> */}

      </TouchableOpacity>


      <NavBar/>

    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    // alignItems:'center',
  },
  usertext:{
     position:'absolute',
    fontWeight: 'bold',
    fontSize: moderateScale(14),
    color: 'black',
    right:'50%',
  },
  userbutton:{
    flexDirection: 'row',
     position:'absolute',
     bottom:'85%',
     left:'15%',
  },

  usericon:{
    // position:'absolute',
    width: iconSize,
    height: iconSize,  
    marginRight: 295,
  },
    

})
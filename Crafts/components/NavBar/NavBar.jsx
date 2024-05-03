import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from "expo-router";

const { width, height } = Dimensions.get('window');
const userIcon = require('../../assets/regular icons/user.png');
const homeIcon = require('../../assets/regular icons/home.png');
// const searchIcon = require('../../assets/regular icons/search.png');
const editIcon = require('../../assets/regular icons/edit.png');
const cartIcon = require('../../assets/regular icons/shopping-cart.png');

const smallScreenWidth = 400;
const iconSize = width < smallScreenWidth ? 20 : 30;
export default function NavBar() {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => router.replace("/NavScreens/home")}>
        <Image source={homeIcon} style={[styles.icon, {}]} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace("/NavScreens/edit")}>
        <Image source={editIcon} style={[styles.icon, {}]} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace("/NavScreens/cart")}>
        <Image source={cartIcon} style={[styles.icon, {}]} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace("/NavScreens/user")}>
        <Image source={userIcon} style={[styles.icon, {}]} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

  icon: {

    width: iconSize,
    height: iconSize,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: '1.5%',
    left: 0,
    right: 0,
    height: iconSize,

  },
});
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import React from 'react'

const hamburgerIcon = require('../../assets/regular icons/menu-burger.png');
const { width, height } = Dimensions.get('window');
const smallScreenWidth = 400;
const iconSize = width < smallScreenWidth ? 20 : 30;
export default function Hamburger() {
  return (
    <View style={styles.hamburgericon}>
    <Image source={hamburgerIcon} style={[styles.icon, {}]} />
    </View>
  )
}


const styles = StyleSheet.create({

    icon: {

        width: iconSize,
        height: iconSize,
    },
    hamburgericon: {
        width: iconSize,
        height: iconSize,
        position: 'absolute',
        top: '3.5%',
        left: '3.5%',
    },

});
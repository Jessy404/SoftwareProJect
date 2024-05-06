import { View, Image, Dimensions, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { router } from "expo-router";

const { width } = Dimensions.get('window');
const userIcon = require('../../assets/regular icons/user.png');
const homeIcon = require('../../assets/regular icons/home.png');
const editIcon = require('../../assets/regular icons/edit.png');
const cartIcon = require('../../assets/regular icons/shopping-cart.png');
const hamburgerIcon = require('../../assets/regular icons/menu-burger.png');

const smallScreenWidth = 400;
const iconSize = width < smallScreenWidth ? 20 : 30;

export default function NavBar() {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim]);

  const handlePress = (route, icon) => {
    setSelectedIcon(icon);
    router.replace(route);
  };

  

  return (
    <Animated.View style={[styles.navbar, { opacity: fadeAnim }]}>
      <TouchableOpacity onPress={() => handlePress("/NavScreens/home", 'home')}>
        <Image source={homeIcon} style={[styles.icon, selectedIcon === 'home' && styles.selectedIcon]} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePress("/NavScreens/edit", 'edit')}>
        <Image source={editIcon} style={[styles.icon, selectedIcon === 'edit' && styles.selectedIcon]} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePress("/NavScreens/cart", 'cart')}>
        <Image source={cartIcon} style={[styles.icon, selectedIcon === 'cart' && styles.selectedIcon]} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePress("/NavScreens/hamburger", 'hamburger')}>
        <Image source={hamburgerIcon} style={[styles.icon, selectedIcon === 'hamburger' && styles.selectedIcon]} />
      </TouchableOpacity>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: iconSize,
    height: iconSize,
  },
  selectedIcon: {
    tintColor: 'purple',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: '0%',
    left: 0,
    right: 0,
    height: iconSize,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 0,
    height:'4%',
  },
});

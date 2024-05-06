import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import React from 'react'


const { width, height } = Dimensions.get('window');
const smallScreenWidth = 400;
const iconSize = width < smallScreenWidth ? 20 : 30;
const cartIcon = require('../../assets/regular icons/shopping-cart.png');

export default function CartIcon() {
    return (
        <View style={styles.carticon}>
            <Image source={cartIcon} style={[styles.icon, {}]} />
        </View>
    )
}

const styles = StyleSheet.create({

    icon: {

        width: iconSize,
        height: iconSize,
    },
    carticon: {
        width: iconSize,
        height: iconSize,
        position: 'absolute',
        top: '3.5%',
        left: '3.5%',
    },

});
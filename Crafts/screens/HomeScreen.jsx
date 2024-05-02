import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import React from 'react';
import Drawer from '../Drawer/drawer';
import Scroll from '../components/ScrollView/ScrollView';

const { width, height } = Dimensions.get('window');
const Icon = require('../assets/regular icons/user.png');
const smallScreenWidth = 400; // Define your breakpoint
const iconSize = width < smallScreenWidth ? 20 : 30; // Adjust sizes 

export default function HomeScreen() {
    return (
        <View style={styles.container}>

            <View style={styles.drawerContainer}>
                <Drawer />
            </View>

            <View style={styles.scrollContainer}>
                <Scroll />
            </View>

            <Image source={Icon} style={[styles.icon, {}]} />



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    drawerContainer: {
        width: width * 0.8,
        height: height * 0.1,
        right: '-10%',
    },
    scrollContainer: {
        width: width,
        height: height * 0.9,
    },
    icon: {

        width: iconSize*0.9,
        height: iconSize*0.9,
        position: 'absolute',
        top: '4%',
        right:'13%',

    },
});
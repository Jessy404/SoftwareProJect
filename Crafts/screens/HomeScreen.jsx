import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import React from 'react';
import Drawer from '../Drawer/drawer';
import Scroll from '../components/ScrollView/ScrollView';
import NavBar from "../components/NavBar/NavBar";
import Hamburger from "../components/Hamburger/Hamburger";

const { width, height } = Dimensions.get('window');
const smallScreenWidth = 400;
const iconSize = width < smallScreenWidth ? 20 : 30;

export default function HomeScreen() {
    return (
        <View style={styles.container}>

            {/* <View style={styles.drawerContainer}>
                <Drawer />
            </View>
            <View style={styles.scrollContainer}>
                <Scroll />
            </View> */}
            <Hamburger/>
            <NavBar/>
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
    // drawerContainer: {
    //     width: width ,
    //     height: height ,
    //     position: 'absolute',
    //     top:'50%',
    //     right: '5%',
    // },
    // scrollContainer: {
    //     width: width,
    //     height: height * 0.3,
    // },
});
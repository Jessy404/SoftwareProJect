import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import Hamburger from "../components/Hamburger/Hamburger";


export default function EditScreen() {
    return (
        <View style={styles.container}>
            <NavBar />
            <Hamburger />
            <Text style={styles.text}> Hi, From Edit Post Page</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        alignSelf: 'center',
    },
});
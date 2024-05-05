import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';
import { router } from "expo-router";
import { MonoText } from '../components/StyledText';
import * as Font from 'expo-font';

const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;


const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;
async function loadFonts() {
    await Font.loadAsync({
        'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    });
}

export default function GetStartedScreen() {


    const [fontsLoaded, setFontsLoaded] = React.useState(false);

    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                await loadFonts();
            } catch (e) {
                console.warn(e);
            } finally {
                setFontsLoaded(true);
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://i.imgur.com/sT6FXnW.jpg' }}
                style={styles.image} />

            <View style={styles.rectangle} />
            <TouchableOpacity style={styles.button} onPress={() => router.replace("/Account/login")}>
                <MonoText style={styles.buttonText}>Let's Get Started</MonoText>
            </TouchableOpacity>
           
            <Text style={styles.text}>Let your imagination run wild with our app, where every swipe is a brushstroke</Text>
            <Text style={styles.text3}>Bestow your creativity with every touch; our app is the gateway to a world where your craft comes alive,
                one masterpiece at a time.</Text>
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
    image: {
        width: width,
        height: height * 0.45,
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
    },
    button: {
        width: width * 0.7,
        height: height * 0.05,
        backgroundColor: 'white',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '25%',
    },
  
    buttonText: {
        color: '#C65BCF',
        fontSize: moderateScale(18),
        fontWeight: 'bold',
    },
    text: {
        fontFamily: 'Lato-Bold',
        color: 'white',
        fontSize: moderateScale(20),
        textAlign: 'center',
        marginVertical: 10,
        top: '3%',
        width: width,
    },
    text3: {
        fontFamily: 'Lato-Bold',
        color: 'white',
        fontSize: moderateScale(
            10),
        textAlign: 'center',
        marginVertical: 10,
        bottom: '-5%',
        width: width * 0.8,
    },
    rectangle: {
        width: '100%',
        height: height * 0.7,
        backgroundColor: '#874CCC',
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: '10%',
        position: 'absolute',
        top: '35%',
    },
});
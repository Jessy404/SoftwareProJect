import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions,TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "../constants/images";
import CustomButton from "../components/CustomButton";
// import { Loader} from "../components/Loader";

// import { useGlobalContext } from "../context/GlobalProvider";




const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;


const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

const Welcome = () => {

  return (
    <SafeAreaView style={styles.background}>
      {/* <Loader isLoading={loading} /> */}

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View style={styles.container}>


          <Image
            source={images.cards}
            style={styles.cardimage}
            resizeMode="contain"
          />

            <Text style={styles.text1}>
              Discover Endless {"\n"}
              Possibilities with <Text style={styles.textcolor2}>"AppName"</Text>
            </Text>
            {/* <Image style={styles.lineimg}
              source={images.path}
              resizeMode="contain"
            /> */}

          <Text style={styles.text2}>
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with <Text style={styles.textcolor}>"AppName"</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={() => router.push("/Account/login")}>
            <Text  style={styles.buttontext}>Continue With Email</Text>

            </TouchableOpacity>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  background: {
    backgroundColor: '#F4F4F4',
  },
  cardimage: {
    width: width,
    height: height * 0.45,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
  },
  lineimg:{
    position:'absolute',
    top:'56%',
    left:'45%',
  },
  text1:{
    justifyContent:'center',
    textAlign:'center',
    fontWeight:'bold',
    color:'#3A3535',
    position:'absolute',
    top:'50%',
    fontSize: moderateScale(18),

  },
  text2:{
    justifyContent:'center',
    textAlign:'center',
    color:'#3A3535',
    position:'absolute',
    top:'62%',
    fontSize: moderateScale(10),

  },
  textcolor:{
    color:'#FF7315',
    fontSize: moderateScale(10),

  },
  textcolor2:{
    color:'#FF7315',
    fontWeight:'bold',
    fontSize: moderateScale(18),
  },
  button:{
    position:'relative',
    top:'70%',
    alignItems:'center',
    width: width * 0.80,
    height: height * 0.06,
    backgroundColor:'#FF7315',
    borderRadius:20,
    padding:10,
  },
  buttontext:{
    color:'#F4F4F4',
    fontSize: moderateScale(14),
  },
})

export default Welcome;
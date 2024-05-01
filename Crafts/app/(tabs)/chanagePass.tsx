
// import ChanagePass from "@/screens/chanagePass"
// export default function TabOneScreen() {
//   return (
// <ChanagePass/>
//   );
// }import React from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { TextInput, Pressable } from 'react-native'

export default function ChanagePass() {
  //   const [email , setEmail]= useState ("")
  const ChanagePass = () => {
    console.log("done");
    return (
      <Text>
        Chanaged
      </Text>)

  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chanage Your Password Now </Text>

      <View style={styles.inputView}>

        <TextInput
          style={styles.input}
          placeholder=" Enter New Password"
          placeholderTextColor="#0E46A3"
          // value={password}
          // onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder=" Verfied Password"
          placeholderTextColor="#0E46A3"
          // value={password}
          // onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={ChanagePass}>
          <Text style={styles.buttonText}>Save</Text>
        </Pressable></View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontWeight: "bold"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: "#0E46A3"
  },
  inputView: {
    gap: 20,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 5
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: "#0E46A3",
    borderWidth: 1,
    borderRadius: 7
  },
  button: {
    backgroundColor: "#0E46A3",
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: 50
  },



})
// export default ChanagePass 

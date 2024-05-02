import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Drawer from "../Drawer/drawer"
export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>
        Welcome, Profile page!
      </Text>

      <View style={styles.drawer}>
        <Drawer />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawer: {
    position: 'absolute',
    top: -50,
    left: 0,
    right: -10,
    bottom: 0,
  },

})

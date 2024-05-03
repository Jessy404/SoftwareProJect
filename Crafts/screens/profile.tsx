import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Drawer from "../Drawer/drawer"

export default function Profile() {
  return (
    <View style={styles.container}>
      const user = auth.currentUser;
      if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
}

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

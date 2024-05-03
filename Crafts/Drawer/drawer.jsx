import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icoon from 'react-native-vector-icons/FontAwesome';
import CoolButton from "../Drawer/CoolButton ";
import { router } from "expo-router";

const Drawer = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('right');

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <CoolButton onPress={() => drawer.current.closeDrawer()} />

      <View>
      <TouchableOpacity onPress={() => router.replace("/Profile/profile")} 
      style={styles.list1}>
        <Icoon name="user" size={24} color="#000" style={{ marginRight: 10 }} />
        <Text style={styles.link}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace("/(tabs)")} 
      style={styles.list1}>
        <Icoon name="home" size={24} color="#000" style={{ marginRight: 10 }} />
        <Text style={styles.link}>Home</Text>
      </TouchableOpacity>
      
      </View>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        <View style={styles.humburgermenuicon}>
          <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
            <Icon name="menu" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  list1: {
    flexDirection: 'row',
     alignItems: 'center',
      marginBottom: 10,
  },
  humburgermenuicon:{



  },

});

export default Drawer;
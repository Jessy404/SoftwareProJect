import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const hamburgerIcon = require('../../assets/regular icons/menu-burger.png');
const { width } = Dimensions.get('window');
const smallScreenWidth = 400;
const iconSize = width < smallScreenWidth ? 20 : 30;

export default function Hamburger() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const onSwipe = ({ nativeEvent }) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      setDrawerVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDrawer} style={styles.hamburgericon}>
        <Image source={hamburgerIcon} style={styles.icon} />
      </TouchableOpacity>
      {drawerVisible && (
        <GestureHandlerRootView
          onHandlerStateChange={onSwipe}
          activeOffsetX={[-10, 10]} // Adjust activeOffsetX as needed
        >
          <View style={styles.drawer}>
            {/* Add your menu items here */}
            <Text>Menu Item 1</Text>
            <Text>Menu Item 2</Text>
            <Text>Menu Item 3</Text>
          </View>
        </GestureHandlerRootView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: iconSize,
    height: iconSize,
  },
  hamburgericon: {
    width: iconSize,
    height: iconSize,
    position: 'absolute',
    top: '3.5%',
    left: '43%',
    zIndex: 1,
  },
  drawer: {
    position: 'absolute',
    top: '0%',
    left: '15%',
    width: width * 0.4, // 75% of the screen width
    height: '95%',
    backgroundColor: 'gray',
    paddingTop: '45%',
    paddingLeft:'10%',
    zIndex: '50%',
  },
});

import React, { useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  Dimensions,
  useWindowDimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const isSmallScreen = width < 400;

const bannerImage = require('../../assets/banner/banner.jpg'); // Adjust the path to your banner image
const images = new Array(6).fill(bannerImage); // This will fill the array with your banner image

const Scroll = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const windowDimensions = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={1}
        >
          {images.map((image, imageIndex) => (
            <View
              style={{ width: windowDimensions.width, height: windowDimensions.height * 0.25 }}
              key={imageIndex}
            >
              <ImageBackground source={image} style={styles.card} />
            </View>
          ))}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowDimensions.width * (imageIndex - 1),
                windowDimensions.width * imageIndex,
                windowDimensions.width * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            return <Animated.View key={imageIndex} style={[styles.normalDot, { width }]} />;
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: '100%', // Adjust the height as a percentage of the screen height
    alignItems: 'center',
    justifyContent: 'center',


  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    // height:'100%',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'pink',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Scroll;

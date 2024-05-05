import React, { useRef, useEffect } from 'react';
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

const bannerImage = require('../../assets/banner/banner.jpg'); 
const image1 = require('../../assets/banner/image1.jpg'); 
const image2 = require('../../assets/banner/image2.jpg'); 
const image3 = require('../../assets/banner/image3.jpg'); 
const image4 = require('../../assets/banner/image4.jpg'); 
const image5 = require('../../assets/banner/image5.jpg'); 

const images = [
  bannerImage,
  image1,
  image2,
  image3,
  image4,
  image5
]; 

const Scroll = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(); 
  const imageCount = images.length;
  const windowDimensions = useWindowDimensions();
  const animateToNextImage = (currentIndex) => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= imageCount) {
      nextIndex = 0; 
    }
    const offset = nextIndex * windowDimensions.width;
    scrollViewRef.current.scrollTo({ x: offset, animated: true });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = Math.ceil(scrollX._value / windowDimensions.width);
      animateToNextImage(currentIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          ref={scrollViewRef}
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
    height: '100%', 
    alignItems: 'center',
    justifyContent: 'center',


  },
  card: {
    flex: 1,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalDot: {
    // position: 'absolute',

    height: 9,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Scroll;

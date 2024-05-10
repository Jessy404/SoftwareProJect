import { useState } from "react";
import { ResizeMode, Video } from "expo-av";
import * as Animatable from "react-native-animatable";
import {
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

import { icons } from "../constants";

// Get the full width of the device
const { width, height } = Dimensions.get('window');

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1,
  },
};

const zoomOut = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.9,
  },
};

// Card component
const Card = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image }}
        style={styles.cardImage}
        resizeMode="cover" // This will ensure the image covers the available space
      />
      <Text style={styles.cardTitle}>{item.title}</Text>
      {/* Add more details as needed */}
    </View>
  );
};

// Styles for the card
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    padding: 10,
    width: width * 0.4, 
    height: height * 0.35,
    margin: width * 0.01, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: '100%', 
    height: '100%', 
    borderRadius: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  // ... other styles remain unchanged
});

const TrendingItem = ({ activeItem, item }) => {
  return (
    <Animatable.View
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
      useNativeDriver={true}
    >
      <TouchableOpacity>
        <Card item={item} />
      </TouchableOpacity>
    </Animatable.View>
  );
};


const Trending = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[2]);

  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };

  return (
    <FlatList
      data={posts}
      horizontal
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}
      contentOffset={{ x: 170 }}
    />
  );
};

export default Trending;

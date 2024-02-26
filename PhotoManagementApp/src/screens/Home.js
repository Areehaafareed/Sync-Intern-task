import React from "react";
import { View, Text } from "react-native";
import { Header } from "react-native-elements";

const Home = () => {
  return (
    <View>
      <Text>M Photo Gallery</Text>
      <Header
        backgroundColor="#44b09e"
        centerComponent={{ text: PhotoGalleryApp }}
      />
    </View>
  );
};

export default Home;

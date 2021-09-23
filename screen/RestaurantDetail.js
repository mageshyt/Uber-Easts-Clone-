import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/resaurant page/About";
import MenuItems from "../components/resaurant page/MenuItems";

const RestaurantDetail = ({ route }) => {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems />
    </View>
  );
};
export default RestaurantDetail;
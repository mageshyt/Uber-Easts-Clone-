import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome";
export default function BottomTab() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 30,
        margin: 10,
      }}
    >
      {/* Icons */}
      <Icons icon="home" text="house" />
      <Icons icon="search" text="Browse" />
      <Icons icon="shopping-bag" text="Cart" />
      <Icons icon="first-order" text="Orders" />
      <Icons icon="user" text="user" />
    </View>
  );
}

const Icons = ({ icon, text }) => {
  return (
    <TouchableOpacity>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <FontAwesome5 name={icon} size={25} style={{ marginBottom: 2 }} />
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

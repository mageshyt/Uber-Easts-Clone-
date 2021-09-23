import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ViewCart = ({ navigation, restaurantName }) => {
  return (
    <View
      style={{
        zIndex: 999,
        flex: 1,
        position: "absolute",
        bottom: 120,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: "#121212",
            padding: 13,
            borderRadius: 30,
            alignItems: "center",
            width: 300,
            position: "relative",
          }}
        >
          <Text style={{ fontSize: 24, color: "#fff", fontWeight: "500" }}>
            View Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ViewCart;

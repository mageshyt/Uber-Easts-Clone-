import React, { useState } from "react";

import { View, Text, TouchableOpacity } from "react-native";

export default function HeaderTab(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
        padding: 4,
        marginTop: 5,
      }}
    >
      {/*Header Buttons -1  */}
      <HeaderButton
        text="Delivery"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

const HeaderButton = ({ text, activeTab, setActiveTab }) => (
  <TouchableOpacity
    style={{
      backgroundColor: activeTab === text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 15,
      borderRadius: 20,
    }}
    onPress={() => setActiveTab(text)}
  >
    <Text
      style={{
        color: activeTab === text ? "white" : "black",
        fontSize: 16,
        fontWeight: "700",
      }}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

import React, { useState } from "react";

import { View, Text, TouchableOpacity } from "react-native";

export default function HeaderTab() {
  const [activeButton, setActiveButton] = useState("Delivery");
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
        padding: 4,
      }}
    >
      {/*Header Buttons -1  */}
      <HeaderButton
        text="Delivery"
        bgcolor="black"
        textColor="white"
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <HeaderButton
        text="pickups"
        bgcolor="white"
        textColor="black"
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
    </View>
  );
}

const HeaderButton = ({
  text,
  bgcolor,
  textColor,
  activeButton,
  setActiveButton,
}) => (
  <TouchableOpacity
    style={{
      backgroundColor: activeButton === text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 15,
      borderRadius: 20,
    }}
    onPress={() => setActiveButton(text)}
  >
    <Text
      style={{
        color: activeButton === text ? "white" : "black",
        fontSize: 16,
        fontWeight: "700",
      }}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

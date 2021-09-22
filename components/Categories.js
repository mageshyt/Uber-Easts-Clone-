import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import items from "../assets/Data/Categories_data";

const Categories = () => {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 10,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/*  to hide scroll Indicator use showsHorizontalScrollIndicator set to false*/}
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 20 }}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 14, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

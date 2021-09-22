import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useState } from "react";

const RestaurantItems = ({ restaurantData }) => {
  const clickLike = () => {
    setLike(1);
  };
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 10 }}>
      {restaurantData.map((restaurant, index) => (
        <View
          key={index}
          style={{
            marginTop: 10,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 5,
          }}
        >
          {/* Image of the restaurant */}
          <RestaurantImage image={restaurant.image_url} />
          {/* restaurant Info */}
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
};
// ! for info
const RestaurantInfo = ({ name, rating }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      {/* Name */}
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{name}</Text>
      {/* Time */}
      <Text style={{ fontSize: 13, color: "gray" }}>20-30 min</Text>
    </View>
    {/* Rating */}
    <View
      style={{
        backgroundColor: "#1212",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
      }}
    >
      <Text>{rating}</Text>
    </View>
  </View>
);

// ! for image

const RestaurantImage = ({ image }) => {
  const [like, setLike] = useState(true);
  let count = 0;
  return (
    <>
      <TouchableOpacity activeOpacity={0.8}>
        <Image
          source={{ uri: image }}
          style={{
            height: 180,
            width: "100%",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ position: "absolute", right: 15, top: 20 }}>
        <MaterialCommunityIcons
          onPress={() => {
            count++;
            if (count == 1) {
              setLike(!like);
            }
            count = 0;
          }}
          name={like ? "heart-outline" : "heart"}
          size={25}
          color={like ? "#eee" : "red"}
        />
      </TouchableOpacity>
    </>
  );
};

export default RestaurantItems;

import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useState } from "react";

const RestaurantItems = ({ navigation, restaurantData }) => {
  return (
    <>
      {restaurantData.map((restaurant, index) => (
        <View key={index} style={{ marginBottom: 10 }}>
          <View
            style={{
              marginTop: 10,
              backgroundColor: "white",
              padding: 10,
              borderRadius: 5,
            }}
          >
            {/* Image of the restaurant */}
            <RestaurantImage
              navigation={navigation}
              image={restaurant.image_url}
              restaurant={restaurant}
            />
            {/* restaurant Info */}
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </View>
      ))}
    </>
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

const RestaurantImage = ({ image, navigation, restaurant }) => {
  const [like, setLike] = useState(true);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        // ! when we press the image it will navigate to about page

        onPress={() =>
          navigation.navigate("RestaurantDetail", {
            name: restaurant.name,
            image: restaurant.image_url,
            price: restaurant.price,
            rating: restaurant.rating,
            categories: restaurant.categories,
            reviews: restaurant.review_count,
          })
        }
      >
        <Image
          source={{ uri: image }}
          style={{
            height: 180,
            width: "100%",
          }}
        />
      </TouchableOpacity>
      {/* Heart Icon  */}
      <TouchableOpacity style={{ position: "absolute", right: 15, top: 20 }}>
        <MaterialCommunityIcons
          onPress={() => {
            setLike(!like);
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

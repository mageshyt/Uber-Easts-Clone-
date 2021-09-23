import React from "react";
import { View, Text, Image } from "react-native";

const About = ({ route }) => {
  console.log("route", route.params);
  // ! destructuring info form yelp
  const { name, image, price, rating, categories, reviews } = route.params;

  const formatted_Categories = categories.map((cat) => cat.title).join(" • ");
  console.log(route);
  // !description
  const description = ` ${name} ${formatted_Categories} ${
    price ? " • " + price : ""
  } 🎫 (${reviews})++  ${rating} ⭐`;
  console.log("deatils", route.categories);
  return (
    <View>
      {/* Restaurant Image */}
      <RestaurantImage image={image} />
      {/* Title */}
      <RestaurantName name={name} />
      {/* description */}
      <RestaurantDescription description={description} />
    </View>
  );
};

// ! for Restaurant Image

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

// ! Title
const RestaurantName = ({ name }) => (
  <Text
    style={{
      fontWeight: "700",
      fontSize: 27,
      marginTop: 10,
      marginHorizontal: 10,
    }}
  >
    {name}
  </Text>
);

// ! description
const RestaurantDescription = ({ description }) => (
  <Text style={{ marginTop: 10, fontSize: 16, marginHorizontal: 10 }}>
    {description}
  </Text>
);

export default About;

import React from "react";

import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";

// data
const food = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Tandoori Chicken",
    description:
      "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
    price: "$19.20",
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
  {
    title: "Chilaquiles",
    description:
      "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
    price: "$14.50",
    image:
      "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
    price: "$21.50",
    image:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
  },
];
// ! style
const style = StyleSheet.create({
  menu_item: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 18,
  },
  title_style: {
    fontSize: 20,
    fontWeight: "700",
  },
});
const MenuItems = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {food.map((food, index) => (
          <View key={index}>
            <View style={style.menu_item}>
              <BouncyCheckbox
                fillColor="green"
                iconStyle={{ borderColor: "#lightgray", borderRadius: 15 }}
              />
              {/* Food info */}
              <FoodInfo food={food} />
              {/* Image of the food */}
              <FoodImage image={food.image} />
            </View>
            <Divider
              width={0.6}
              orientation="vertical"
              style={{ marginHorizontal: 20 }}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const FoodInfo = ({ food }) => (
  <View
    style={{
      justifyContent: "space-evenly",
      width: 240,
    }}
  >
    <Text style={style.title_style}>{food.title}</Text>
    <Text>{food.description}</Text>
    <Text>{food.price}</Text>
  </View>
);

// ! for image
const FoodImage = ({ image }) => (
  <View>
    <Image
      source={{ uri: image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
export default MenuItems;

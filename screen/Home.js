import React, { useEffect, useState } from "react";

import { View, Text, SafeAreaView, ScrollView } from "react-native";

import Categories from "../components/Home Page/Categories";

import HeaderTab from "../components/Home Page/HeaderTab";

import RestaurantItems from "../components/Home Page/RestaurantItem";

import Searchbar from "../components/Home Page/Searchbar";

import BottomTab from "../components/Home Page/BottomTab";
// local restaurant
import localRestaurants from "../assets/Data/Restaurant-data";
import { Divider } from "react-native-elements";

// Api key
const YELP_API_KEY =
  "3RioyHYr8uRx0yw7jwmQ__CXhctGO0e7a_w8aSpoyQg8nQNP8XBQrIqlVl7etiQ4qtncqgj5beRimYy5lpnKWR9dFBkM5oSJ0CKMhjMHHkZycoMk6qpx46XvqO5JYXYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  // * for city
  const [city, setCity] = useState("LosAngels");

  // ! active tab
  const [activeTab, setActiveTab] = useState("Delivery");

  // !get restaurant details
  const getRestaurantsFromYelp = () => {
    // ! yelp url
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions) // !here fetching the data according to the active tab state
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter(
            (business) =>
              business.transactions.includes(activeTab.toLowerCase()) // ! here we are filtering the hotels according to Delivery or Pickups
          )
        )
      );
  };
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]); // ! Use effect will call the function when city changed and active tab changes

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 16 }}>
        {/* Header */}

        <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Search bar */}

        <Searchbar cityState={setCity} />
      </View>

      {/* categories and restaurant page */}

      <ScrollView showsHorizontalScrollIndicator={false}>
        {/* Category */}

        <Categories />
        {/* Restaurant */}
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTab />
    </SafeAreaView>
  );
}

import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTab from "../components/HeaderTab";
import RestaurantItems from "../components/RestaurantItem";
import Searchbar from "../components/Searchbar";

// local restaurant
import localRestaurants from "../assets/Data/Restaurant-data";
// Api key
const YELP_API_KEY =
  "3RioyHYr8uRx0yw7jwmQ__CXhctGO0e7a_w8aSpoyQg8nQNP8XBQrIqlVl7etiQ4qtncqgj5beRimYy5lpnKWR9dFBkM5oSJ0CKMhjMHHkZycoMk6qpx46XvqO5JYXYx";
export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  // * for city
  const [city, setCity] = useState("LosAngels");
  // ! active tab
  const [activeTab, setActiveTab] = useState("Delivery");
  const getRestaurantsFromYelp = () => {
    // ! yelp url
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);
  console.log("active", activeTab);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 16 }}>
        <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <Searchbar cityState={setCity} />
      </View>
      {/* categories and restaurant page */}
      <ScrollView showsHorizontalScrollIndicator={false}>
        {/* Category */}

        <Categories />
        {/* Restaurant */}
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}

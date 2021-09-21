import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import HeaderTab from "../components/HeaderTab";
import Searchbar from "../components/Searchbar";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#121212", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 16 }}>
        <HeaderTab />
        <Searchbar />
      </View>
    </SafeAreaView>
  );
}

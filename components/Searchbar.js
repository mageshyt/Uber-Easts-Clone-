import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function Searchbar() {
  return <GooglePlacesAutocomplete placeholder="Search" />;
}

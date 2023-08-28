import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginTop: 10 }}>
      <Header headerText={"Hi, Ashfaq Ahmad"} headerIcon={"bell-o"} />
      <SearchFilter icon="search" placeholder={"Enter Your Fav Recipe"} />
      <View style={{ marginTop: 22, padding: 10, borderRadius: 10, backgroundColor:"white", borderWidth:1}}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories:</Text>
        <CategoriesFilter />
      </View>

      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          Popular Recipes
        </Text>
        <RecipeCard />
      </View>
    </SafeAreaView>
  );
};

export default RecipeListScreen;

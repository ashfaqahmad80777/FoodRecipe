import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { colors, recipeList } from "../Constant";
import { Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = () => {
  const navigation = useNavigation()
  return (
    <View>
      <FlatList
        data={recipeList}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("RecipeDetails", {item: item})}
            key={item?.id}
            style={{
              backgroundColor: colors.COLOR_LIGHT,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
              borderRadius: 16,
              marginVertical: 16,
              alignItems: "center",
              paddingHorizontal: 8,
              paddingVertical: 26,
              marginBottom: 30,
              borderWidth: 1.5,
              // borderColor: "orange"
            }}
          >
            <Image
              source={item.image}
              style={{ width: 150, height: 150, resizeMode: "center" }}
            />
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <View style={{ flexDirection: "row", marginTop: 8 }}>
              <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 5 }}>
                {item.time}
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}> | </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ marginRight: 4, fontSize: 15, fontWeight: "bold" }}
                >
                  {item.rating}
                </Text>
                <FontAwesome
                  name="star"
                  size={16}
                  color={colors.COLOR_PRIMARY}
                />
              </View>
            </View>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({});

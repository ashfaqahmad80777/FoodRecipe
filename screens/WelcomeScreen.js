import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component } from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.pic}>
      <Image source={require("../assets/images/welcome1.png")} />
      <Text style={styles.text}>40k+ Premium Recipes</Text>
      <Text style={styles.text2}>Cook Like A Chef</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("RecipeList")}
      >
        <Text style={styles.text3}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  pic: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#f96163",
  },
  text2: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 40,
    marginTop: 35,
    color: "#3c444c",
  },
  btn: {
    backgroundColor: "#f96163",
    borderRadius: 18,
    paddingVertical: 18,
    width: "80%",
    alignItems: "center",
    marginBottom: 20,
    marginTop: -15,
    // marginLeft: 10,
    alignItems: "center",
  },
  text3: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },
});

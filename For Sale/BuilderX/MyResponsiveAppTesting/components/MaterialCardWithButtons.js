import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function MaterialCardWithButtons(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.shirmpFriedRiceStack}>
        <Text style={styles.shirmpFriedRice}>Shirmp Fried Rice</Text>
        <Image
          source={require("../assets/images/475-4750012_fried-rice-png-transparent-png-download.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <Text style={styles.loremIpsum}>
        Fried rice with shirmps{"\n"}and spicy souce
      </Text>
      <Text style={styles.loremIpsum2}>40$</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    flex: 1,
    width: 185,
    overflow: "hidden",
    flexDirection: "row"
  },
  shirmpFriedRice: {
    top: 168,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 17,
    left: 15
  },
  image: {
    top: 0,
    left: 0,
    width: 175,
    height: 179,
    position: "absolute"
  },
  shirmpFriedRiceStack: {
    width: 175,
    height: 188,
    marginLeft: 9,
    marginTop: -26
  },
  loremIpsum: {
    fontFamily: "alegreya-sans-sc-regular",
    color: "#121212",
    textAlign: "center",
    marginLeft: -164,
    marginTop: 168
  },
  loremIpsum2: {
    fontFamily: "amarante-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: -79,
    marginTop: 202
  }
});

export default MaterialCardWithButtons;

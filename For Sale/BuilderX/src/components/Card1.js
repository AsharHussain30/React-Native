import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function Card1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.shrimpFriedRice}>Shrimp fried rice</Text>
      <Text style={styles.loremIpsum3}>
        Fried rice with shirmps{"\n"}and spicy souce
      </Text>
      <View style={styles.loremIpsum5Row}>
        <Text style={styles.loremIpsum5}>$</Text>
        <View style={styles.loremIpsum4Stack}>
          <Text style={styles.loremIpsum4}>5.30</Text>
          <Text style={styles.text}>5.30</Text>
        </View>
      </View>
      <Image
        source={require("../assets/images/65726a0b-cde2-4c25-a1e4-b2df85142283-removebg-preview.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6"
  },
  shrimpFriedRice: {
    fontFamily: "albert-sans-700",
    color: "#121212",
    fontSize: 18,
    marginTop: 139,
    alignSelf: "center"
  },
  loremIpsum3: {
    fontFamily: "akshar-regular",
    color: "#121212",
    textAlign: "center",
    marginTop: 8,
    marginLeft: 20
  },
  loremIpsum5: {
    fontFamily: "roboto-700",
    color: "rgba(235,174,9,1)",
    fontSize: 18,
    textAlign: "center",
    marginTop: 2
  },
  loremIpsum4: {
    top: 0,
    position: "absolute",
    fontFamily: "aladin-regular",
    color: "#121212",
    fontSize: 23,
    textAlign: "justify",
    bottom: 0,
    left: 0
  },
  text: {
    top: 0,
    position: "absolute",
    fontFamily: "aladin-regular",
    color: "#121212",
    fontSize: 23,
    textAlign: "justify",
    bottom: 0,
    left: 0
  },
  loremIpsum4Stack: {
    width: 40,
    marginLeft: 3
  },
  loremIpsum5Row: {
    height: 28,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 49,
    marginRight: 62
  },
  image: {
    width: 139,
    height: 153,
    marginTop: -272,
    marginLeft: 12
  }
});

export default Card1;

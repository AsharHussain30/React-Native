import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Quantity(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.text}>-</Text>
      <Text style={styles.loremIpsum1}>1</Text>
      <Text style={styles.loremIpsum2}>+</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,162,20,1)",
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  text: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 22
  },
  loremIpsum1: {
    fontFamily: "akshar-500",
    color: "rgba(255,255,255,1)",
    fontSize: 22
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 22
  }
});

export default Quantity;

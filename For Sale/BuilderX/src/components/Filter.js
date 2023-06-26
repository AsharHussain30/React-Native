import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

function Filter(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/filter_(1).png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    justifyContent: "center",
    flexWrap: "nowrap",
    alignItems: "center"
  },
  image: {
    width: 26,
    height: 35
  }
});

export default Filter;

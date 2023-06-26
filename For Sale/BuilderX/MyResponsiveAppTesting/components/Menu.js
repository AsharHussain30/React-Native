import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

function Menu(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.rect}></View>
      <View style={styles.rect2}></View>
      <View style={styles.rect3}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2
  },
  rect: {
    width: 21,
    height: 2,
    backgroundColor: "rgba(0,0,0,1)",
    borderRadius: 20,
    marginLeft: 7,
    marginTop: 7
  },
  rect2: {
    width: 16,
    height: 2,
    backgroundColor: "rgba(0,0,0,1)",
    borderRadius: 20,
    marginLeft: -21,
    marginTop: 14
  },
  rect3: {
    width: 11,
    height: 2,
    backgroundColor: "rgba(0,0,0,1)",
    borderRadius: 20,
    marginLeft: -16,
    marginTop: 21
  }
});

export default Menu;

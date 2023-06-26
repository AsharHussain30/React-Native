import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CartButton(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.addToCart}>Add To Cart</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,162,20,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  addToCart: {
    color: "#fff",
    fontSize: 17
  }
});

export default CartButton;

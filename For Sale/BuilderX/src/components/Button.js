import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function Button(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.signIn}>Sign in</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  signIn: {
    color: "#fff",
    fontSize: 22,
    fontFamily: "open-sans-700",
    textAlign: "left",
    alignSelf: "center"
  }
});

export default Button;

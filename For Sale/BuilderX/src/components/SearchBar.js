import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Feather";

function SearchBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1}>
        <TouchableOpacity style={styles.leftIconButton}>
          <Icon name="search" style={styles.leftIcon}></Icon>
        </TouchableOpacity>
        <View style={styles.leftIconButtonFiller}></View>
        <TextInput
          placeholder="pan-asian"
          selectionColor="rgba(255,255,255,1)"
          placeholderTextColor="rgba(206,206,206,1)"
          style={styles.textInput}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    padding: 4,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3,
    justifyContent: "center"
  },
  rect1: {
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "center",
    width: 375,
    height: 56,
    alignSelf: "center"
  },
  leftIconButton: {
    padding: 11,
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 62,
    marginTop: 4
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "rgba(120,121,131,1)",
    fontSize: 24
  },
  leftIconButtonFiller: {
    flex: 1,
    flexDirection: "row"
  },
  textInput: {
    color: "rgba(144,139,139,1)",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "flex-start",
    lineHeight: 16,
    textAlign: "justify",
    width: 245,
    height: 40,
    marginRight: 7,
    marginTop: 7
  }
});

export default SearchBar;

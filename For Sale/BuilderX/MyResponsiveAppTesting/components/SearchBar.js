import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput, Dimensions } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Icon from "react-native-vector-icons/Feather";


const {height,width} = Dimensions.get("window");

console.log(height);

function SearchBar(props) {
  return (
    <View style={[styles.container, props.style]}>
        <TouchableOpacity style={styles.leftIconButton}>
          <Icon name="search" style={styles.leftIcon}></Icon>
        </TouchableOpacity>
        <TextInput
          placeholder="pan-asian"
          selectionColor="rgba(255,255,255,1)"
          placeholderTextColor="rgba(206,206,206,1)"
          style={styles.textInput}
        ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    flexDirection:"row",
    elevation: 3,
    alignItems:"center",
    justifyContent: "space-evenly"
  },
  leftIconButton: {
    // marginHorizontal: responsiveWidth(2),
    // backgroundColor:"red"

  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "rgba(120,121,131,1)",
    fontSize: responsiveFontSize(3),
    // backgroundColor:"yellow"
  },
  textInput: {
    color: "rgba(144,139,139,1)",
    fontSize: responsiveFontSize(2),
    alignSelf: "flex-start",
    lineHeight: 16,
    textAlign: "justify",
    height: responsiveFontSize(6.2),
    width:"67%",
    // backgroundColor:"red"
  }
});

export default SearchBar;

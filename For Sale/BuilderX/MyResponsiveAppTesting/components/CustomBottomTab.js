import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function CustomBottomTab(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.icon1Row}>
        <FeatherIcon name="home" style={styles.icon1}></FeatherIcon>
        <FontAwesomeIcon
          name="user-circle-o"
          style={styles.icon2}
        ></FontAwesomeIcon>
      </View>
      <View style={styles.home1Row}>
        <Text style={styles.home1}>Home</Text>
        <Text style={styles.profile1}>Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    borderRadius: 26,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 3,
      width: 0
    },
    elevation: 27,
    shadowOpacity: 1,
    shadowRadius: 9,
    overflow: "hidden",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  icon1: {
    color: "rgba(0,0,0,1)",
    fontSize: 30
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    marginLeft: 203
  },
  icon1Row: {
    height: 30,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 56,
    marginRight: 56
  },
  home1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12
  },
  profile1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    marginLeft: 200
  },
  home1Row: {
    height: 14,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 55,
    marginRight: 54
  }
});

export default CustomBottomTab;

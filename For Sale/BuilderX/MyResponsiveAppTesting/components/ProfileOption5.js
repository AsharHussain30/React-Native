import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";

function ProfileOption5(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.signOut}>Sign Out</Text>
      <FontAwesomeIcon name="sign-in" style={styles.icon1}></FontAwesomeIcon>
      <EntypoIcon name="chevron-right" style={styles.icon2}></EntypoIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    flexDirection: "row"
  },
  signOut: {
    fontFamily: "alata-regular",
    color: "#121212",
    fontSize: 22,
    textAlign: "justify",
    marginLeft: 127,
    alignSelf: "center"
  },
  icon1: {
    color: "rgba(143,141,141,1)",
    fontSize: 30,
    marginLeft: -165,
    alignSelf: "center"
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    marginLeft: 222,
    marginTop: 17
  }
});

export default ProfileOption5;

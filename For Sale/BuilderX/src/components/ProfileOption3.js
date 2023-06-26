import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";

function ProfileOption3(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.icon1Row}>
        <FontAwesomeIcon
          name="address-card"
          style={styles.icon1}
        ></FontAwesomeIcon>
        <Text style={styles.myAddress1}>My Address</Text>
        <EntypoIcon name="chevron-right" style={styles.icon2}></EntypoIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    borderWidth: 0,
    borderColor: "#000000",
    flexDirection: "row"
  },
  icon1: {
    color: "rgba(143,141,141,1)",
    fontSize: 23,
    marginTop: 4
  },
  myAddress1: {
    fontFamily: "alata-regular",
    color: "#121212",
    fontSize: 22,
    textAlign: "justify",
    marginLeft: 40
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 33,
    width: 30,
    marginLeft: 62
  },
  icon1Row: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: 21,
    marginLeft: 47,
    marginTop: 18
  }
});

export default ProfileOption3;

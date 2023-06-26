import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";

function ProfileOptions(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.icon1Row}>
        <FontAwesomeIcon name="history" style={styles.icon1}></FontAwesomeIcon>
        <Text style={styles.orderHistory1}>Order History</Text>
        <EntypoIcon name="chevron-right" style={styles.icon2}></EntypoIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,0)",
    flexDirection: "row"
  },
  icon1: {
    color: "rgba(143,141,141,1)",
    fontSize: 30,
    marginTop: 2
  },
  orderHistory1: {
    fontFamily: "alata-regular",
    color: "#121212",
    fontSize: 22,
    width: 152,
    height: 35,
    textAlign: "justify",
    marginLeft: 22
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    marginLeft: 47,
    marginTop: 1
  },
  icon1Row: {
    height: 35,
    flexDirection: "row",
    flex: 1,
    marginRight: 44,
    marginLeft: 54,
    marginTop: 16
  }
});

export default ProfileOptions;

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";

function ProfileOption2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.icon1Row}>
        <FontAwesomeIcon
          name="credit-card-alt"
          style={styles.icon1}
        ></FontAwesomeIcon>
        <Text style={styles.paymentMethod1}>Payment Method</Text>
        <EntypoIcon name="chevron-right" style={styles.icon2}></EntypoIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 35,
    backgroundColor: "rgba(15,15, 15,0)",
    borderStyle: "solid",
    borderBottomWidth: 0,
    borderWidth: 0,
    borderColor: "#000000"
  },
  icon1: {
    color: "rgba(143,141,141,1)",
    fontSize: 23,
    marginTop: 5
  },
  paymentMethod1: {
    fontFamily: "alata-regular",
    color: "#121212",
    fontSize: 22,
    textAlign: "justify",
    marginLeft: 15,
    marginTop: 1
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 33,
    width: 30,
    marginLeft: 38
  },
  icon1Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 41,
    marginRight: 18
  }
});

export default ProfileOption2;

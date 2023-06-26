import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";

function ProfileOptions4(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.icon1Row}>
        <FontAwesomeIcon name="gift" style={styles.icon1}></FontAwesomeIcon>
        <Text style={styles.myPromocodes1}>My Promocodes</Text>
        <EntypoIcon name="chevron-right" style={styles.icon2}></EntypoIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(230,230, 230,0)",
    borderWidth: 0,
    borderColor: "#000000",
    flexDirection: "row"
  },
  icon1: {
    color: "rgba(143,141,141,1)",
    fontSize: 30,
    marginTop: 1
  },
  myPromocodes1: {
    fontFamily: "alata-regular",
    color: "#121212",
    fontSize: 22,
    textAlign: "justify",
    marginLeft: 19,
    marginTop: 1
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 33,
    width: 30,
    marginLeft: 44
  },
  icon1Row: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: 20,
    marginLeft: 49,
    marginTop: 17
  }
});

export default ProfileOptions4;

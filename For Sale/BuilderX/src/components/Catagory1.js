import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Catagory1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.iconRow}>
        <Icon name="chili-mild" style={styles.icon}></Icon>
        <Text style={styles.spicy}>Spicy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,162,20,1)",
    borderRadius: 10,
    flexDirection: "row"
  },
  icon: {
    color: "rgba(192,32,32,1)",
    fontSize: 30,
    transform: [
      {
        rotate: "-25.00deg"
      }
    ]
  },
  spicy: {
    fontFamily: "andika-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 21,
    marginLeft: 7,
    marginTop: 4
  },
  iconRow: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: 37,
    marginLeft: 17,
    marginTop: 6
  }
});

export default Catagory1;

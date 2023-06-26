import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import Catagory1 from "../components/Catagory1";
import Card1 from "../components/Card1";
import Menu from "../components/Menu";
import User from "../components/User";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea2}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollArea2_contentContainerStyle}
        >
          <View style={styles.catagory1Row}>
            <Catagory1 style={styles.catagory1}></Catagory1>
            <Text style={styles.loremIpsum}></Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.scrollAreaRow}>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <Card1 style={styles.card}></Card1>
          </ScrollView>
        </View>
        <Text style={styles.orderHistory1}>Order History</Text>
      </View>
      <View style={styles.menuRow}>
        <Menu style={styles.menu}></Menu>
        <User style={styles.userProfile}></User>
      </View>
      <Text style={styles.text}>
        Find and order{"\n"}your favorite dish 🤗️
      </Text>
      <View style={styles.searchBarRow}>
        <SearchBar style={styles.searchBar}></SearchBar>
        <Filter style={styles.filter}></Filter>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollArea2: {
    width: 375,
    height: 66,
    marginTop: 280
  },
  scrollArea2_contentContainerStyle: {
    width: 375,
    height: 66,
    flexDirection: "row"
  },
  catagory1: {
    height: 45,
    width: 139
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 42,
    marginTop: 19
  },
  catagory1Row: {
    height: 45,
    flexDirection: "row",
    flex: 1,
    marginRight: 173,
    marginLeft: 21,
    marginTop: 10
  },
  scrollArea: {
    width: 375,
    height: 521,
    backgroundColor: "rgba(230, 230, 230,0)"
  },
  scrollArea_contentContainerStyle: {
    height: 521,
    width: 375
  },
  card: {
    height: 278,
    width: 163,
    borderRadius: 10,
    backgroundColor: "rgba(15,15, 15,0)",
    marginTop: 20,
    marginLeft: 28
  },
  orderHistory1: {
    fontFamily: "alata-regular",
    color: "#121212",
    fontSize: 22,
    width: 152,
    height: 35,
    textAlign: "justify",
    marginLeft: 569,
    marginTop: 43
  },
  scrollAreaRow: {
    height: 521,
    flexDirection: "row",
    marginRight: -721
  },
  menu: {
    height: 28,
    width: 32,
    marginTop: 4
  },
  userProfile: {
    height: 36,
    width: 36,
    marginLeft: 274
  },
  menuRow: {
    height: 36,
    flexDirection: "row",
    marginTop: -826,
    marginLeft: 13,
    marginRight: 20
  },
  text: {
    fontFamily: "be-vietnam-pro-700",
    color: "#121212",
    fontSize: 25,
    letterSpacing: 1,
    marginTop: 42,
    marginLeft: 20
  },
  searchBar: {
    height: 52,
    width: 262,
    borderRadius: 10,
    backgroundColor: "rgba(246,246,246,1)"
  },
  filter: {
    height: 52,
    width: 54,
    borderRadius: 10,
    backgroundColor: "rgba(255,162,20,1)",
    marginLeft: 10
  },
  searchBarRow: {
    height: 52,
    flexDirection: "row",
    marginTop: 27,
    marginLeft: 20,
    marginRight: 29
  }
});

export default Home;

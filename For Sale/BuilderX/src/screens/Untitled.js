import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import CartButton from "../components/CartButton";
import Quantity from "../components/Quantity";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <FeatherIcon name="chevron-left" style={styles.icon}></FeatherIcon>
        <View style={styles.detailsColumn}>
          <Text style={styles.details}>Details</Text>
          <Image
            source={require("../assets/images/65726a0b-cde2-4c25-a1e4-b2df85142283-removebg-preview1.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
        <EvilIconsIcon name="heart" style={styles.icon2}></EvilIconsIcon>
        <View style={styles.rect}></View>
      </View>
      <View style={styles.scrollAreaStack}>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.icon3Row}>
              <FontAwesomeIcon
                name="star"
                style={styles.icon3}
              ></FontAwesomeIcon>
              <Text style={styles.loremIpsum}>4.6</Text>
            </View>
            <View style={styles.loremIpsum3StackRow}>
              <View style={styles.loremIpsum3Stack}>
                <Text style={styles.loremIpsum3}></Text>
                <Text style={styles.shrimpFriedRice1}>
                  Shrimp &amp; Vegetable {"\n"}Fried Rice
                </Text>
              </View>
              <Text style={styles.loremIpsum4}>$</Text>
              <Text style={styles.text1}>5.30</Text>
            </View>
            <Text style={styles.loremIpsum5}>
              Shrimp fried rice: a savory and satisfying combination {"\n"}of
              tender shrimp, fluffy rice, and crisp vegetables,{"\n"} seasoned
              with a mix of soy sauce, oyster sauce, garlic,{"\n"} and ginger.
            </Text>
            <View style={styles.proteinsRow}>
              <Text style={styles.proteins}>Proteins</Text>
              <Text style={styles.proteins1}>4.5g</Text>
            </View>
            <View style={styles.fatsRow}>
              <Text style={styles.fats}>Fats</Text>
              <Text style={styles.fats2}>6.3g</Text>
            </View>
            <View style={styles.carbohydratesRow}>
              <Text style={styles.carbohydrates}>Carbohydrates</Text>
              <Text style={styles.fats3}>10.9g</Text>
            </View>
            <Text style={styles.ingredients}>Ingredients</Text>
            <View style={styles.loremIpsum6StackStack}>
              <View style={styles.loremIpsum6Stack}>
                <Text style={styles.loremIpsum6}></Text>
                <Text style={styles.carbohydrates2}>
                  Cooked white rice{"\n"}Shrimp{"\n"}Eggs{"\n"}Vegetables{"\n"}
                  Garlic (minced){"\n"}Ginger (minced or grated){"\n"}Soy sauce
                  {"\n"}Oyster sauce (optional){"\n"}Salt and pepper{"\n"}
                  Cooking oil (such as vegetable, canola, or{"\n"}peanut oil)
                </Text>
              </View>
              <Text style={styles.rice2}></Text>
            </View>
            <CartButton style={styles.cupertinoButtonWarning}></CartButton>
          </ScrollView>
        </View>
        <Quantity style={styles.quantity}></Quantity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(232,230,230,1)"
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    width: 25,
    height: 25,
    marginTop: 45
  },
  details: {
    fontFamily: "alata-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: 68
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 18
  },
  detailsColumn: {
    width: 200,
    marginLeft: 50,
    marginTop: 45
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    marginLeft: 44,
    marginTop: 44
  },
  rect: {
    width: 377,
    height: 213,
    backgroundColor: "#E6E6E6",
    marginLeft: 66
  },
  iconRow: {
    height: 291,
    flexDirection: "row",
    marginLeft: 13,
    marginRight: -425
  },
  scrollArea: {
    top: 21,
    left: 0,
    width: 375,
    height: 684,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  scrollArea_contentContainerStyle: {
    height: 684,
    width: 375
  },
  icon3: {
    color: "rgba(221,169,13,1)",
    fontSize: 19,
    height: 19,
    width: 18
  },
  loremIpsum: {
    fontFamily: "roboto-500",
    color: "#121212",
    fontSize: 15,
    marginLeft: 8
  },
  icon3Row: {
    height: 19,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 26,
    marginRight: 304
  },
  loremIpsum3: {
    top: 19,
    left: 12,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  shrimpFriedRice1: {
    top: 0,
    position: "absolute",
    fontFamily: "albert-sans-700",
    color: "#121212",
    fontSize: 25,
    left: 0
  },
  loremIpsum3Stack: {
    width: 237,
    height: 60
  },
  loremIpsum4: {
    fontFamily: "roboto-700",
    color: "rgba(235,174,9,1)",
    fontSize: 18,
    textAlign: "center",
    marginLeft: 25,
    marginTop: 23
  },
  text1: {
    fontFamily: "aladin-regular",
    color: "#121212",
    fontSize: 30,
    textAlign: "justify",
    height: 28,
    width: 53,
    marginLeft: 8,
    marginTop: 16
  },
  loremIpsum3StackRow: {
    height: 60,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 26,
    marginRight: 16
  },
  loremIpsum5: {
    fontFamily: "akshar-regular",
    color: "rgba(134,129,129,1)",
    textAlign: "left",
    fontSize: 16,
    marginTop: 5,
    marginLeft: 26
  },
  proteins: {
    fontFamily: "verdana-regular",
    color: "rgba(240,185,104,1)",
    fontSize: 15
  },
  proteins1: {
    fontFamily: "verdana-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 15,
    marginLeft: 228
  },
  proteinsRow: {
    height: 18,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 26,
    marginRight: 26
  },
  fats: {
    fontFamily: "verdana-regular",
    color: "rgba(240,185,104,1)",
    fontSize: 15
  },
  fats2: {
    fontFamily: "verdana-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 15,
    marginLeft: 258
  },
  fatsRow: {
    height: 18,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 26,
    marginRight: 26
  },
  carbohydrates: {
    fontFamily: "verdana-regular",
    color: "rgba(240,185,104,1)",
    fontSize: 15
  },
  fats3: {
    fontFamily: "verdana-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 15,
    marginLeft: 174
  },
  carbohydratesRow: {
    height: 18,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 26,
    marginRight: 22
  },
  ingredients: {
    fontFamily: "albert-sans-700",
    color: "#121212",
    fontSize: 15,
    marginTop: 22,
    marginLeft: 26
  },
  loremIpsum6: {
    top: 18,
    left: 16,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  carbohydrates2: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "verdana-regular",
    color: "rgba(133,132,131,1)",
    fontSize: 15
  },
  loremIpsum6Stack: {
    top: 0,
    left: 0,
    width: 316,
    height: 198,
    position: "absolute"
  },
  rice2: {
    top: 0,
    left: 39,
    position: "absolute",
    fontFamily: "verdana-regular",
    color: "rgba(152,150,148,1)",
    fontSize: 15
  },
  loremIpsum6StackStack: {
    width: 316,
    height: 198,
    marginTop: 14,
    marginLeft: 26
  },
  cupertinoButtonWarning: {
    height: 44,
    width: 131,
    borderRadius: 20,
    marginTop: 35,
    marginLeft: 122
  },
  quantity: {
    position: "absolute",
    top: 0,
    left: 130,
    height: 41,
    width: 116
  },
  scrollAreaStack: {
    width: 375,
    height: 705,
    marginTop: 43
  }
});

export default Untitled;

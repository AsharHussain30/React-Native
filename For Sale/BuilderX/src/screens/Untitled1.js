import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import ProfileOptions from "../components/ProfileOptions";
import ProfileOption2 from "../components/ProfileOption2";
import ProfileOption3 from "../components/ProfileOption3";
import ProfileOptions4 from "../components/ProfileOptions4";
import ProfileOption5 from "../components/ProfileOption5";
import CustomBottomTab from "../components/CustomBottomTab";
import Svg, { Ellipse } from "react-native-svg";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Untitled1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../assets/images/pexels-rajesh-tp-1624487.jpg")}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <Text style={styles.myProfile}>My profile</Text>
        </ImageBackground>
        <View style={styles.rect}>
          <View style={styles.image2Row}>
            <Image
              source={require("../assets/images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg")}
              resizeMode="cover"
              style={styles.image2}
            ></Image>
            <View style={styles.bradJohnsonColumn}>
              <Text style={styles.bradJohnson}>Brad Johnson</Text>
              <Text style={styles.bradJohnson2}>bradjohnson@gmail.com</Text>
            </View>
            <FontAwesomeIcon
              name="pencil-square-o"
              style={styles.icon}
            ></FontAwesomeIcon>
          </View>
        </View>
      </View>
      <ProfileOptions style={styles.profileOptions}></ProfileOptions>
      <ProfileOption2 style={styles.profileOption2}></ProfileOption2>
      <ProfileOption3 style={styles.profileOption3}></ProfileOption3>
      <ProfileOptions4 style={styles.profileOptions4}></ProfileOptions4>
      <ProfileOption5 style={styles.profileOption5}></ProfileOption5>
      <View style={styles.customBottomTabStack}>
        <CustomBottomTab style={styles.customBottomTab}></CustomBottomTab>
        <Svg viewBox="0 0 77.5 75.33" style={styles.ellipse1}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(0,0,0,1)"
            cx={39}
            cy={38}
            rx={39}
            ry={38}
          ></Ellipse>
        </Svg>
        <EntypoIcon name="shopping-cart" style={styles.icon2}></EntypoIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(217,214,214,1)"
  },
  image: {
    top: 0,
    width: 375,
    height: 212,
    position: "absolute",
    borderBottomRightRadius: 45,
    borderBottomLeftRadius: 45,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    overflow: "hidden"
  },
  image_imageStyle: {
    opacity: 0.8
  },
  myProfile: {
    fontFamily: "atma-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 50,
    textAlign: "center",
    marginTop: 58,
    marginLeft: 16
  },
  rect: {
    top: 153,
    left: 36,
    width: 303,
    height: 108,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 21,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 5,
      height: 7
    },
    elevation: 21,
    shadowOpacity: 0.1,
    shadowRadius: 7
  },
  image2: {
    width: 81,
    height: 81,
    borderRadius: 100
  },
  bradJohnson: {
    fontFamily: "almendra-sc-regular",
    color: "#121212",
    fontSize: 20
  },
  bradJohnson2: {
    fontFamily: "archivo-narrow-regular",
    color: "rgba(155,155,155,1)",
    fontSize: 17
  },
  bradJohnsonColumn: {
    width: 155,
    marginLeft: 17,
    marginTop: 17,
    marginBottom: 17
  },
  icon: {
    color: "rgba(155,155,155,1)",
    fontSize: 21,
    height: 21,
    width: 21
  },
  image2Row: {
    height: 81,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 18,
    marginRight: 11
  },
  imageStack: {
    width: 375,
    height: 261
  },
  profileOptions: {
    height: 67,
    width: 350,
    overflow: "visible",
    borderRadius: 35,
    borderBottomWidth: 0,
    shadowColor: "rgba(155,155,155,1)",
    shadowOpacity: 1,
    shadowRadius: 7,
    elevation: 21,
    shadowOffset: {
      width: 0,
      height: 3
    },
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 25,
    marginLeft: 13
  },
  profileOption2: {
    height: 67,
    width: 350,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      height: 3,
      width: 0
    },
    elevation: 21,
    shadowOpacity: 1,
    shadowRadius: 7,
    borderBottomWidth: 0,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 13,
    marginLeft: 13
  },
  profileOption3: {
    height: 67,
    width: 350,
    borderRadius: 35,
    borderWidth: 0,
    borderColor: "#000000",
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      height: 3,
      width: 0
    },
    elevation: 21,
    shadowOpacity: 1,
    shadowRadius: 7,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 14,
    marginLeft: 13
  },
  profileOptions4: {
    height: 67,
    width: 350,
    borderRadius: 35,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 21,
    shadowOpacity: 1,
    shadowRadius: 7,
    borderWidth: 0,
    borderColor: "#000000",
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 14,
    marginLeft: 13
  },
  profileOption5: {
    height: 67,
    width: 350,
    borderWidth: 0,
    borderColor: "#000000",
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 21,
    shadowOpacity: 1,
    shadowRadius: 7,
    borderRadius: 35,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 14,
    marginLeft: 13
  },
  customBottomTab: {
    position: "absolute",
    top: 24,
    left: 0,
    height: 87,
    width: 375
  },
  ellipse1: {
    top: 0,
    width: 78,
    height: 75,
    position: "absolute",
    left: 149
  },
  icon2: {
    top: 21,
    left: 173,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 30
  },
  customBottomTabStack: {
    width: 375,
    height: 111,
    marginTop: 25
  }
});

export default Untitled1;

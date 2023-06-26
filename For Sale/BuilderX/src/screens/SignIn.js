import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text
} from "react-native";
import Button from "../components/Button";

function SignIn(props) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonStack}>
        <TouchableOpacity style={styles.button}></TouchableOpacity>
        <ImageBackground
          source={require("../assets/images/stock-photo-1001946273.jpg")}
          resizeMode="cover"
          style={styles.image3}
          imageStyle={styles.image3_imageStyle}
        >
          <TouchableOpacity style={styles.button2}></TouchableOpacity>
        </ImageBackground>
        <Image
          source={require("../assets/images/download_(1).png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Text style={styles.curryLeaves}>Curry Leaves</Text>
        <Text style={styles.loremIpsum}>
          Enjoy Delicious meal{"\n"}right Now 😋
        </Text>
        <Button style={styles.materialButtonViolet}></Button>
        <Text style={styles.loremIpsum2}>
          Don&#39;t have an Account? Sign up.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  button: {
    top: 738,
    left: 299,
    width: 64,
    height: 22,
    position: "absolute"
  },
  image3: {
    top: 0,
    left: 0,
    width: 523,
    height: 847,
    position: "absolute"
  },
  image3_imageStyle: {
    opacity: 0.72
  },
  button2: {
    width: 64,
    height: 22,
    marginTop: 738,
    marginLeft: 299
  },
  image2: {
    top: 66,
    left: 186,
    width: 76,
    height: 60,
    position: "absolute"
  },
  curryLeaves: {
    top: 73,
    left: 261,
    position: "absolute",
    fontFamily: "arya-700",
    color: "rgba(255,255,255,1)",
    textAlign: "justify",
    fontSize: 25
  },
  loremIpsum: {
    left: 118,
    position: "absolute",
    fontFamily: "balsamiq-sans-700",
    color: "rgba(255,255,255,1)",
    fontSize: 32,
    letterSpacing: 1,
    top: 554,
    textAlign: "left"
  },
  materialButtonViolet: {
    height: 55,
    width: 318,
    position: "absolute",
    top: 666,
    borderRadius: 10,
    backgroundColor: "rgba(255,162,20,1)",
    left: 121
  },
  loremIpsum2: {
    top: 738,
    left: 118,
    position: "absolute",
    fontFamily: "amaranth-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    textAlign: "left"
  },
  buttonStack: {
    width: 523,
    height: 847,
    marginTop: -17,
    marginLeft: -92
  }
});

export default SignIn;

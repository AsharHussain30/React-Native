import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "";

import * as Font from "expo-font";
import Home from "./src/screens/Home";
import SignIn from "./src/screens/SignIn";
import Untitled from "./src/screens/Untitled";
import Untitled1 from "./src/screens/Untitled1";

const DrawerNavigation = createDrawerNavigator({
  Home: Home,
  SignIn: SignIn,
  Untitled: Untitled,
  Untitled1: Untitled1
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Home: Home,
    SignIn: SignIn,
    Untitled: Untitled,
    Untitled1: Untitled1
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "open-sans-700": require("./src/assets/fonts/open-sans-700.ttf"),
      "aladin-regular": require("./src/assets/fonts/aladin-regular.ttf"),
      "amarante-regular": require("./src/assets/fonts/amarante-regular.ttf"),
      "alata-regular": require("./src/assets/fonts/alata-regular.ttf"),
      "amaranth-regular": require("./src/assets/fonts/amaranth-regular.ttf"),
      "be-vietnam-pro-700": require("./src/assets/fonts/be-vietnam-pro-700.ttf"),
      "almendra-sc-regular": require("./src/assets/fonts/almendra-sc-regular.ttf"),
      "albert-sans-700": require("./src/assets/fonts/albert-sans-700.ttf"),
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),
      "archivo-narrow-regular": require("./src/assets/fonts/archivo-narrow-regular.ttf"),
      "akshar-regular": require("./src/assets/fonts/akshar-regular.ttf"),
      "akshar-500": require("./src/assets/fonts/akshar-500.ttf"),
      "alegreya-sans-sc-regular": require("./src/assets/fonts/alegreya-sans-sc-regular.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "roboto-500": require("./src/assets/fonts/roboto-500.ttf"),
      "arya-700": require("./src/assets/fonts/arya-700.ttf"),
      "atma-regular": require("./src/assets/fonts/atma-regular.ttf"),
      "balsamiq-sans-700": require("./src/assets/fonts/balsamiq-sans-700.ttf"),
      "andika-regular": require("./src/assets/fonts/andika-regular.ttf"),
      "verdana-regular": require("./src/assets/fonts/verdana-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;

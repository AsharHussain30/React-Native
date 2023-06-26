import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Burger} from './Screens/Burger';
import {Started} from './Screens/Started';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Drink} from './Screens/DetailScreen';
import {Cart} from './Screens/Cart';
import {Provider} from 'react-redux';
import {persistor, store} from './Screens/Redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import Main from './Main';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});

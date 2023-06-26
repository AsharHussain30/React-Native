import 'react-native-gesture-handler';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Start from './Screens/Start';
import Home from './Screens/Home';
import Animation from './Screens/Animation';
import Cart from './Screens/Cart';
import ProfileScreen from './Screens/EditProfile';
import {Provider} from 'react-redux';
import {store, persistor} from './Screens/Redux/store';
import Main from './Main';
import {PersistGate} from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import {StripeProvider} from '@stripe/stripe-react-native';

const {width, height} = Dimensions.get('window');

// let totalwidth = [];

// const guidelineBaseWidth = () => {
//   // less than 4.7 or equal
//   if (width <= 312) {
//     totalwidth.push(360);
//   }

//   // less than 5.5 or equal
//   else if (width <= 293) {
//     totalwidth.push(341);
//   }

//   // less than 6.5 or equal
//   else if (width <= 306) {
//     totalwidth.push(354);
//   }

//   // greater than 6.5
//   else if (width > 306) {
//     totalwidth.push(402);
//   }
// };

// const guidelineBaseHeight = height <= 592 ? 680 : 780;

// export const horizontalScale = (size: any) =>
// (width
//   // /

//   ) * size;
//   export const verticalScale = (size: any) =>
//   (height / guidelineBaseHeight) * size;
//   export const moderateScale = (size: any, factor = 0.5) =>
//   size + (horizontalScale(size) - size) * factor;

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <StripeProvider publishableKey="pk_test_51NGyhLJZiOz1mmzVd1BO9vnpXSaUwfDcxJsStcbCxcGeUoPAGmcPfktojvMaH8wBajFnSkb3Mp145CrsS73P0i1q002kJ0NviF">
          <Main />
        </StripeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

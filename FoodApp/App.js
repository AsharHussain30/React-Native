import 'react-native-reanimated';
import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Calculator} from './android/app/src/assets/Calculator';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Cart} from './src/assets/Cart';
import {Home} from './src/assets/Home';
import {Started} from './src/assets/Started';
import {Drink} from './src/assets/Drink';
import {HotDog} from './src/assets/HotDog';
import {Donut} from './src/assets/Donut';
import {Burger} from './src/assets/Burger';
import {SignIn} from './src/assets/AuthNavigation/SignIn';
import {AuthSplash} from './src/assets/AuthNavigation/AuthSplash';
import {SignUp} from './src/assets/AuthNavigation/SignUp';
import {ForgotPassword} from './src/assets/ForgotPassword';
import auth from '@react-native-firebase/auth';
import {EditCart} from './src/assets/EditCart';
import persistStore from 'redux-persist/es/persistStore';
import {PersistGate} from 'redux-persist/integration/react';


let persistor = persistStore(store);

function App() {
  const [user, setUser] = useState('');



  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userExcist => {
      if (userExcist) {
        setUser(userExcist);
      } else {
        setUser('');
      }
    });
    return subscriber;
  }, []);

  const Stack = createStackNavigator();
  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {user ? (
              <>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Donut" component={Donut} />
                <Stack.Screen name="HotDog" component={HotDog} />
                <Stack.Screen name="Burger" component={Burger} />
                <Stack.Screen name="Drink" component={Drink} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="EditCart" component={EditCart} />
              </>
            ) : (
              <>
                <Stack.Screen name="AuthSplash" component={AuthSplash} />
                {/* <Stack.Screen name="Started" component={Started} /> */}
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen
                  name="ForgotPassword"
                  component={ForgotPassword}
                />
                <Stack.Screen name="SignUp" component={SignUp} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
        </PersistGate>
      </Provider>
   );
}

export default App;

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Calculator} from './android/app/src/assets/Calculator'
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Cart} from './android/app/src/assets/Cart'
import {Home} from './android/app/src/assets/Home'


function App() {
  return (
     <Provider store={store}>
     <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='Cart' element={<Cart />}/>
     </Routes>
     </BrowserRouter>
     </Provider>
  )
}

export default App

import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

class Burger extends Component {
  render() {
    return (
      <View>
        <Text>burger 1</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addItemToCart:(product) => dispatch({type:"ADD_TO_CART",
//     paylod:product})
//     }
// }

export default Burger
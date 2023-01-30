import React from 'react'
import { FlatList, Text, View, Image, ScrollView, Button } from 'react-native'

const itemsScreen = () => {
return (
    <View>
      <Text>hello</Text>
    </View>
  )
}

export default itemsScreen



// //const ItemsScreen = () => {
//   const addItem = item => {
//     dispatch(AddItemsToCart(item))
//    }
//    const dispatch = useDispatch();

// {
//   <FlatList
//       data={data}
//       scrollEnabled
//       horizontal
//       renderItem={({ item, index }) => {
//         return (
//           <View style={{ flexDirection: "column", flex: 2 ,justifyContent:"center",alignContent:"center",alignItems:"center",}}>
//             <Text>{item.name}</Text>
//             <Text>{item.price}</Text>
//             <Image source={item.image} style={{ height: 100, width: 150, }} />
//             <Button title='ADD TO CART' onPress={() => addItems(item)}/>
//           </View>
//         )
//       }} />
// }
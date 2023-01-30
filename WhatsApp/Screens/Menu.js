// import {
//   Dimensions,
//   TouchableOpacity,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import React from 'react';
// import {useNavigation} from '@react-navigation/native';

// const Menu = () => {
//   const {width, height} = Dimensions.get('window');

//   const navigation = useNavigation();

//   return (
//     <View>
//       <View
//         style={{
//           height: 60,
//           width: width,
//           backgroundColor: 'red',
//           justifyContent: 'space-evenly',
//           alignItems: 'center',
//           flexDirection: 'row',
//         }}>
//         <TouchableOpacity onPress={() => navigation.navigate('Chats')}>
//           <Text style={{justifyContent: 'center', color: 'white'}}>Chats</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.navigate('Status')}>
//           <Text style={{justifyContent: 'center', color: 'white'}}>Status</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Menu;

// const styles = StyleSheet.create({});

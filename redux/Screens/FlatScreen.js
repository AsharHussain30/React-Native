// import react,{Component} from 'react'
// import { Text, View ,Image, Button, TouchableOpacity, TextInput, ScrollView} from 'react-native'
// import ItemsScreen from './ItemsScreen';
// import { useDispatch,useSelector } from 'react-redux';    
// import {incNumber} from "../actions/index";
// import {decNumber} from "../actions/index";


// const dispatch = useDispatch();
// const myState = useSelector((state) => state.AddToCart);  

// export class FlatScreen extends Component {
//   render() {
//     var ImagesGalary=[
//         {   
//             "Img":require("../assets/assets/burger2.png"),
//             "text":"BURGER",
//         },
        
//     ]
//     const elevator=[
//         1,2,3,4,5
//     ];
//     var output = 0;
//     for (var i = 0;i < elevator.length;i++){
//         output =  output + elevator[i];
//     } 
// console.log(output)

//     return (
//       <View style={{alignContent:"center",alignItems:"center",flexDirection:"row"}}>
//         {
//           ImagesGalary.map((item,index) => <Image source={item.Img} key={index} style={{marginTop:50,height:90,width:150}}/>)

//         }
//         {
//             ImagesGalary.map((item) => <Text style={{fontSize:20,paddingLeft:30,paddingVertical:20}}>{item.text}</Text>)
//         }
//         <TouchableOpacity onClick={() => dispatch(incNumber())} style={{paddingVertical:20,backgroundColor:"cyan",borderRadius:50,padding:20}}><Text>+</Text></TouchableOpacity>
//           <TextInput name='quantity' value="0"/>
//           <TouchableOpacity onClick={() => dispatch(decNumber())} style={{marginVertical:20,paddingVertical:20,backgroundColor:"cyan",borderRadius:50,padding:20}}><Text>-</Text></TouchableOpacity>
//       </View>
//     )
//   }
// }

// export default FlatScreen













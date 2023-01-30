import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button,FlatList} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; 
import cartarray from '../store/cartarray';


export const CartScreen = ({navigation}) => {

  const data = cartarray;

    return (
      <View>
        <FlatList 
        data={data}
        renderItem={item => {
          return (
            <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center",}}>
              <View style={{alignItems:"flex-end"}}>
              <Text>cart</Text>
              </View>
              
            </View>
          )
        }
        }/>

        </View>
    )
    }  

const styles = StyleSheet.create({
    about:{
      flex:1,
      flexDirection:'row',
      justifyContent:'flex-end',
      position: 'absolute',
      marginVertical: 400,
      alignContent:'center',
        
    },
    about1:{
      alignContent:'center',
      padding:10,
      opacity:0.6,
      
    },
    btn1:{
      marginTop:190,
      marginLeft:100,
      alignItems:'center'
    },
    img: {
      height:80,
    },
    container: {
      alignContent:'center',
      margin:15,
      flex: 1,
      backgroundColor:'white',
    },
  });
        
        
        
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; 
import { TouchableOpacity } from 'react-native-gesture-handler';


export const DetailsScreen = ({navigation}) => {
    return (
      <View>
        <View >
        <Icon name='facebook' color='orange' size={40} style={styles.about1}/><Text style={styles.about1}>Facebook</Text>
        <Icon name='twitter' color='orange' size={40} style={styles.about1}/><Text style={styles.about1}>Twitter</Text>
        <Icon name='instagram' color='orange' size={40} style={styles.about1}/><Text style={styles.about1}>Instagram</Text>
        <Icon name='linkedin' color='orange' size={40} style={styles.about1}/><Text style={styles.about1}>Linkedin</Text>        
        </View>
        <Text style={styles.about}>Amazon.com | Conditions of Use | © 1996-2022 Amazon.com, Inc. or its affiliates</Text>

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
        
        
        
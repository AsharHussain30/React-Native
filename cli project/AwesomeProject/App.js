import 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity,} from 'react-native';
import { MotiView } from 'moti'


export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MotiView
        style={{width: 100, height: 100,borderWidth:5,borderColor:"white",shadowColor:"cyan",shadowOffset:{height:1,width:1},shadowRadius:25}}
        transition={{ delay: 100, damping: 15,loop:true }}
      from={{
        opacity: 1,
        translateX:1,
        translateY:1,
        height:20,
        width:20
      }}
      animate={{
        opacity: 1,
        translateX: -0,
        translateY:0,
        height:670,
        width:400
      }}
      exit={{
        opacity: 1,
        translateX: 0,
      }}
      >
        <TouchableOpacity  style={{flex:1,justifyContent:"center",alignItems:"center",marginBottom:20}}>
          <Text style={{color:"red",fontSize:15}}>Coin</Text>
        </TouchableOpacity>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection:"row",
    alignItems: "center",
    justifyContent: 'center',
  },
});

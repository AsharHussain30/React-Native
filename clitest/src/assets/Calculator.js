import { StyleSheet, Text, View, TextInput, TouchableOpacity, Switch, Button, } from 'react-native'
import React, { useState } from 'react'

export const Calculator = () => {

  const [value,setValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [memory,setMemory] = useState(null);


  const [theme, setTheme] = useState(false);
  
  const toggleSwitch = () => {
    setTheme(
      previousState => !previousState
    )
      ;
  }
  const onButtonClick = content => {
    const num = parseFloat(value);
    if(content === "AC"){
      setValue("0");
      return;
    }
    if(content === "."){
      if(value.includes(".")) return;

      setValue(value + ".");
      return;
    }
    if(content === "%"){
      setMemory(num);
      setValue(value / 100);
      setOperator("%");
      return;
    }
    if(content === "x"){
      setMemory(num);
      setValue("0");
      setOperator("x");
      return;
    }
    if(content === "÷"){
      setMemory(num);
      setValue("0");
      setOperator("÷");
      return;
    }
    if(content === "+"){
      setMemory(num);
      setValue("0");
      setOperator("+");
      return;
    }
    if(content === "-"){
      setMemory(num);
      setValue("0");
      setOperator("-");
      return;
    }

    if(content === "/"){
      setMemory(num);
      setValue("0");
      setOperator("/");
      return;
    }
    if(content === "="){

      if(!operator) return;

      if(operator === "+"){
        setValue(memory + parseFloat(value));
      } else if(operator === "-"){
        setValue(memory - parseFloat(value))
      } else if(operator === "÷"){
        setValue(memory / parseFloat(value))
      } else if(operator === "x"){
        setValue(memory * parseFloat(value))
      }

      setMemory(null);
      setOperator(null);
      return;
    }

    if(value[value.length - 1] === "."){
      setValue(value + content);
    } else {
      setValue(parseFloat(num + content).toString());
    }
  };
  const clear = () => {
    setValue(value.slice(0,-1));
    return;
  }
  

  return (
    <View style={
      {
        backgroundColor: !theme ? "white" : "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }
    }
    >
      <Switch value={theme} onValueChange={toggleSwitch} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, height: 50, }} />
      <Text style={{ color: !theme ? "black" : "white", fontSize: 23,marginTop:-420 }}>Calculator</Text>
      <Text style={{ fontSize: 70,textAlign:"right",alignSelf:"flex-end",paddingRight:25,  paddingLeft: 20,color: !theme ? "black" : "white" ,fontWeight:"300"}}>{value}</Text>
        <View style={{height:500,width:"100%",bottom:0,left:0,right:0,position:"absolute",paddingHorizontal:20,paddingVertical:20,paddingTop:70}}> 
        <View style={{ flex: 1, flexDirection: "row",justifyContent:"space-evenly",marginBottom:30 }}>
          <TouchableOpacity onPress={() => onButtonClick("AC")}>
            <Text style={{ fontSize: 20, width:80, height:80,textAlign:"center",textAlignVertical:"center", marginHorizontal: 10, textAlign: "center", color: theme ? "white" : "black", fontWeight: "bold", fontSize: 20, borderRadius: 100,backgroundColor:"#a5a6a6" }}>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={clear} >
            <Text style={{ fontSize: 20, width:80, height:80,textAlign:"center",textAlignVertical:"center", marginHorizontal: 10, textAlign: "center", color: theme ? "white" : "black", fontWeight: "bold", fontSize: 20, borderRadius: 100,backgroundColor:"#a5a6a6" }}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onButtonClick("%")} >
            <Text style={{  fontSize: 20, width:80, height:80,textAlign:"center",textAlignVertical:"center", marginHorizontal: 10, textAlign: "center", color: theme ? "white" : "black", fontWeight: "bold", fontSize: 20, borderRadius: 100,backgroundColor:"#a5a6a6" }}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onButtonClick("÷")}>
            <Text style={{  fontSize: 20, width: 80, height: 80,textAlign:"center",textAlignVertical:"center", marginHorizontal: 10, textAlign: "center", color: theme ? "white" : "black", fontWeight: "bold", fontSize: 20, borderRadius: 100,backgroundColor:"#ff9e09"  }}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: "row",justifyContent:"space-evenly",marginBottom:30 }}>
          <TouchableOpacity onPress={() => onButtonClick("7")} >
            <Text style={{  fontSize: 20, width: 80, height: 80,textAlign:"center",textAlignVertical:"center", marginHorizontal: 10, textAlign: "center", color: theme ? "white" : "black", fontWeight: "bold", fontSize: 20, borderRadius: 100,backgroundColor:"#333333"  }}>7</Text>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => onButtonClick("8")} >
            <Text style={{  fontSize: 20, width: 80, height: 80,textAlign:"center",textAlignVertical:"center", marginHorizontal: 10, textAlign: "center", color: theme ? "white" : "black", fontWeight: "bold", fontSize: 20, borderRadius: 100,backgroundColor:"#333333"  }}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onButtonClick("9")} >
            <Text style={{  fontSize: 20, width: 80, height: 80,textAlign:"center",textAlignVertical:"center", marginHorizontal: 10, textAlign: "center", color: theme ? "white" : "black", fontWeight: "bold", fontSize: 20, borderRadius: 100,backgroundColor:"#333333"  }}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onButtonClick("x")} >
            <Text style={{  fontSize: 20, width: 80, height: 80,textAlign:"center",textAlignVertical:"center", marginHorizontal: 10, textAlign: "center", color: theme ? "white" : "black", fontWeight: "bold", fontSize: 20, borderRadius: 100,backgroundColor:"#ff9e09"  }}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: "row",justifyContent:"space-evenly",marginBottom:30 }}>
          <TouchableOpacity onPress={() => onButtonClick("4")} >
            <Text style={{  fontSize: 20, width: 80, height: 80,textAlign:"center",textAlignVertical:"center", marginHorizontal: 10, textAlign: "center", color: theme ? "white" : "black", fontWeight: "bold", fontSize: 20, borderRadius: 100,backgroundColor:"#333333"  }}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onButtonClick("5")} >
            <Text style={{  fontSize: 20, width: 80, height: 80,textAlign:"center",textAlignVertical:"center", marginHorizontal: 10, textAlign: "center", color: theme ? "white" : "black", fontWeight: "bold", fontSize: 20, borderRadius: 100,backgroundColor:"#333333"  }}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onButtonClick("6")} >
            <Text style={{  fontSize: 20, width: 80, height: 80,textAlign:"center",textAlignVertical:"center", marginHorizontal: 10, textAlign: "center", color: theme ? "white" : "black", fontWeight: "bold", fontSize: 20, borderRadius: 100,backgroundColor:"#333333"  }}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onButtonClick("-")} >
            <Text style={{  fontSize: 20, width: 80, height: 80,textAlign:"center",textAlignVertical:"center", marginHorizontal: 10, textAlign: "center", color: theme ? "white" : "black", fontWeight: "bold", fontSize: 20, borderRadius: 100,backgroundColor:"#ff9e09"  }}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: "row",justifyContent:"space-evenly",marginBottom:30 }}>
          <TouchableOpacity onPress={() => onButtonClick("1")} >
            <Text style={{  fontSize: 20, width: 80, height: 80,textAlign:"center",textAlignVertical:"center", marginHorizontal: 10, textAlign: "center", color: theme ? "white" : "black", fontWeight: "bold", fontSize: 20, borderRadius: 100,backgroundColor:"#333333"  }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onButtonClick("2")} >
            <Text style={{  fontSize: 20, width: 80, height: 80,textAlign:"center",textAlignVertical:"center", marginHorizontal: 10, textAlign: "center", color: theme ? "white" : "black", fontWeight: "bold", fontSize: 20, borderRadius: 100,backgroundColor:"#333333"  }}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onButtonClick("3")} >
            <Text style={{  fontSize: 20, width: 80, height: 80,textAlign:"center",textAlignVertical:"center", marginHorizontal: 10, textAlign: "center", color: theme ? "white" : "black", fontWeight: "bold", fontSize: 20, borderRadius: 100,backgroundColor:"#333333"  }}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onButtonClick("+")} >
            <Text style={{ fontSize: 20, backgroundColor:"#ff9e09", width: 80, height: 80,textAlignVertical:"center", paddingTop: 25, marginHorizontal: 10, textAlign: "center", color: theme ? "white" : "black", fontWeight: "bold", fontSize: 20, borderRadius: 100 }}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: "row",marginBottom:30,justifyContent:"space-evenly" }}>
          <TouchableOpacity onPress={() => onButtonClick("0")} >
            <Text style={{  fontSize: 20, width: 190, height: 80,textAlign:"center",textAlignVertical:"center", marginHorizontal: 10, textAlign: "center", color: theme ? "white" : "black", fontWeight: "bold", fontSize: 20, borderRadius: 100,backgroundColor:"#333333"  }}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onButtonClick(".")} >
            <Text style={{  fontSize: 20, width: 80, height: 80,textAlign:"center",textAlignVertical:"center", marginHorizontal: 10, textAlign: "center", color: theme ? "white" : "black", fontWeight: "bold", fontSize: 20, borderRadius: 100,backgroundColor:"#333333"  }}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onButtonClick("=")} >
            <Text style={{  fontSize: 20, width: 80, height: 80,textAlign:"center",textAlignVertical:"center", marginHorizontal: 10, textAlign: "center", color: theme ? "white" : "black", fontWeight: "bold", fontSize: 20, borderRadius: 100,backgroundColor:"#ff9e09"  }}>=</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
  )
}


const styles = StyleSheet.create({
  hexagon:{
    height:55,
    width:100,
    marginBottom:45
  },
  hexagonInner:{
    height:55,
    width:100,
    backgroundColor:"cyan"
  },
  hexagonBefore:{
    position:"absolute",
    bottom: -26,
    borderLeftWidth:50,
    borderLeftColor:"transparent",
    borderRightWidth:50,
    borderRightColor:"transparent",
    borderTopWidth:27,
    borderTopColor:"cyan"
  },
  hexagonAfter:{
    position:"absolute",
    top:-26,
    borderLeftWidth:50,
    borderLeftColor:"transparent",
    borderRightWidth:50,
    borderRightColor:"transparent",
    borderBottomWidth:27,
    borderBottomColor:"cyan"
  },
  container: {
    backgroundColor: "#070707",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    height: 350,
    width: 300,
    borderColor: "white",
    backgroundColor: "gray",
    borderWidth: 5,

  }
})

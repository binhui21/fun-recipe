import React from "react";
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

export default function HomeScreen({navigation}){

    function login() {
        navigation.navigate("SignInSignUp")
      }

      function register() {
        navigation.navigate("SignInSignUp")
      }

    return(
        <View style={styles.container}>
            
            <ImageBackground source={require("../assets/homebackground.png")} style={styles.backgroundImage} resizeMode="cover" >        
            
                <View style={styles.title}><Text style={styles.titleText}>FUN RECIPE</Text>
                <View style={{flexDirection: "row"}}>
            <TouchableOpacity style={styles.button} onPress={ login }>
            
            <Text style={styles.buttonText}> {"Log In"} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={ register }>
          <Text style={styles.buttonText}> {"Register"} </Text>
          </TouchableOpacity>
          </View>
          </View>
          </ImageBackground>
      </View>  
    )
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#00bfff',
    width: "30%",
    margin: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  titleText: {
    color: "#008b8b",
    fontSize: 34,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    flexDirection:"column",
    alignItems:"center",
  },
});
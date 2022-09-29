import React from "react";
import { View, Button, TouchableOpacity, Text, ImageBackground  } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from './Styles/StyleHome';

export function HomeScreen({ navigation }) {

  const img = './imgs/background.jpg'

    return (
      <View style={styles.container}>
        <ImageBackground
        source={require(img)}
        style={styles.imgFundo}
        >
        <TouchableOpacity  onPress={() => navigation.navigate('Cadastro')}>
        <LinearGradient colors={['#A62A5C','#6A2597']} start={{x:1,y:1}} 
        end={{x:0,y:1}} locations={[.2,0.8]} style={styles.linearGradient} >
        <Text style={styles.text}>Cadastrar Cliente</Text>
        </LinearGradient>
        </TouchableOpacity>  
        </ImageBackground>   
      </View>
    );
  }
import React from "react";
import { View, Button, ImageBackground, TouchableOpacity, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from './Styles/StyleHome';

export function SyncScreen({ navigation }) {
  const img = './imgs/background.jpg'

  return (
    <View style={styles.container}>
      <ImageBackground
      source={require(img)}
      style={styles.imgFundo}
      >
      <TouchableOpacity  onPress={() => navigation.goBack('Cadastro')}>
      <LinearGradient colors={['#A62A5C','#6A2597']} start={{x:1,y:1}} 
      end={{x:0,y:1}} locations={[.2,0.8]} style={styles.linearGradient} >
      <Text style={styles.text}>Voltar para Home</Text>
      </LinearGradient>
      </TouchableOpacity>  
      </ImageBackground>   
    </View>
  );
  }
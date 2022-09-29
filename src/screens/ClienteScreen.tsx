import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, ImageBackground} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from './Styles/StyleHome';

export function ClienteScreen({ navigation }) {

const img = './imgs/background.jpg'
  
  return (
      <View style={styles.container}>
        <ImageBackground
        source={require(img)}
        style={styles.imgFundo}
        >
        <TouchableOpacity>
        <LinearGradient colors={['#A62A5C','#6A2597']} start={{x:1,y:1}} 
        end={{x:0,y:1}} locations={[.2,0.8]} style={styles.linearGradient} >
        <Text style={styles.text}>Exibir Lista</Text>
        </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity>
        <LinearGradient colors={['#A62A5C','#6A2597']} start={{x:1,y:1}} 
        end={{x:0,y:1}} locations={[.2,0.8]} style={styles.linearGradient} >
        <Text style={styles.text}>Editar lista</Text>
        </LinearGradient>
        </TouchableOpacity>
        </ImageBackground>
      </View>


    );
  }


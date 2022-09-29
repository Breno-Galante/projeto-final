import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{ 
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center'
      
  },
    text:{
      fontSize:30,
      color: 'white',
      textAlign:'center',
      fontWeight:'500'
  },
  imgFundo:{
    flex: 1,
    width: '100%' ,
    resizeMode: 'cover',
    alignItems: 'center', 
      justifyContent: 'space-evenly', 
      backgroundColor:'white',
    },
    linearGradient:{
      borderRadius: 18,
    width: 205,
    height: 76,
    justifyContent:'center',
    alignItems: 'center',
    shadowColor: "#939",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16, 
    
  },
  })

  export default styles
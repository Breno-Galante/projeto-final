import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        width: '90%',
        height: 42,
        paddingLeft: 15,
        backgroundColor: '#2e2e2e',
        borderRadius: 20,
        color: '#f8f8ff'
    },
    linearGradient:{
        borderRadius: 18,
      width: 125,
      height: 44,
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
    text: {
        fontSize: 38,
        color: '#2e2e2e',
        marginBottom: 30,
        fontWeight: '600',
        marginTop: 10
    },
    textCheck: {
        fontSize: 20,
        fontWeight: '600',
        color: '#2e2e2e',
    },
    imgFundo: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    textButton: {
        fontSize: 21,
        fontWeight: '500',
        color: '#f8f8ff',
    }
})

export default styles
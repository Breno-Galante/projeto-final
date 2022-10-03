import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

export const CheckBox = ({options = [] , onChange, multiple = false}) => {

  const [selected, setSelected] = useState([]);

  function toggle(id){
    let index = selected.findIndex(i => i === id)
    let arrSelecteds = [...selected];
    if (index !== -1){
        arrSelecteds.splice(index, 1);
    } else {
      multiple ? arrSelecteds.push(id) : (arrSelecteds = [id]);
    }
  
    setSelected(arrSelecteds);
  }

  useEffect(() => onChange(selected), [selected]);
  
    return (
      <View style={styles.container}>
          {options.map((op,index)=>(
            <View style={styles.optionContainer} key={index}>
              <TouchableOpacity style={styles.touchable} onPress={()=> toggle(op?.id)}>
                {
                  selected.findIndex(i=> i === op.id) !== -1? (
                    <Icon name='check' color={'#3ebd93'} size={16}/>
                  ) : null
                }
              </TouchableOpacity>
              <Text style={styles.opText}>{op?.text}</Text>
            </View>
          ))}
      </View>
    );
  }

export const CheckCircle = ({options = [] , onChange, multiple = false}) => {

  const [selected, setSelected] = useState([]);

  function toggle(id){
    let index = selected.findIndex(i => i === id)
    let arrSelecteds = [...selected];
    if (index !== -1){
        arrSelecteds.splice(index, 1);
    } else {
      multiple ? arrSelecteds.push(id) : (arrSelecteds = [id]);
    }
  
    setSelected(arrSelecteds);
  }

  useEffect(() => onChange(selected), [selected]);
  
    return (
      <View style={styles.container}>
          {options.map((op,index)=>(
            <View style={styles.optionContainer} key={index}>
              <TouchableOpacity style={styles.touchableCircle} onPress={()=> toggle(op?.id)}>
                {
                  selected.findIndex(i=> i === op.id) !== -1? (
                    <Icon name='checkcircle' color={'#3ebd93'} size={19}/>
                  ) : null
                }
              </TouchableOpacity>
              <Text style={styles.opText}>{op?.text}</Text>
            </View>
          ))}
      </View>
    );
  }

//checkcircle

  const styles = StyleSheet.create({
    container:{
      flexDirection:'row',
    },
    touchable:{
      height:21,
      width:21,
      borderRadius: 4,
      borderColor:'#3ebd93',
      borderWidth: 2,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    touchableCircle:{
      height:21,
      width:21,
      borderRadius: 14,
      borderColor:'#3ebd93',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    optionContainer:{
      flexDirection: 'row',
      alignItems: 'center',
    },
    opText:{
      marginLeft: 7,
      color:'#555',
      fontSize: 16,
      fontWeight:'600',
      marginRight: 10
    }
})


export default CheckBox

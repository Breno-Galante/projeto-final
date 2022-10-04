import React, { useState, useEffect } from "react";
import { View, TextInput, Text, TouchableOpacity, Alert, ImageBackground, Switch, ScrollView, AsyncStorage, NativeModules } from "react-native";
import styles from './Styles/StyleCadastro';
import LinearGradient from "react-native-linear-gradient";
import CheckBox, { CheckCircle, CheckBoxDias } from "./Index";
import SQLite from 'react-native-sqlite-storage';


export default function CadastroScreen({ navigation }) {
  
  const db = SQLite.openDatabase(
    {
      name: 'MainDB',
      location: 'default',
    },
    () => { },
    error => { console.log(error) }
  );

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [whatsApp, setWhatsApp] = useState('')
  const [email, setEmail] = useState('')
  const [diasEntrega, setDiasEntrega] = useState([])
  const [contato, setContato] = useState('')
  const [tipoEstabelecimento, setTipoEstabelecimento] = useState('')
  const [isEnable, setIsEnable] = useState(false)


  useEffect(() => {
    createTable();
    setData();
  }, []);

  useEffect(() => {
    console.log(diasEntrega)
  }, [])



  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS"
        + "Clientes "
        + "(ID INTEGER PRIMARY KEY AUTOINCREMENT,"
        + "Nome TEXT, Sobrenome TEXT, Telefone TEXT,"
        + "WhatsApp TEXT, Email TEXT, DiasEntrega TEXT"
        + "PrefContato TEXT, TipoEstabelecimento TEXT EntregaRastreavel TEXT);"
      )
    })
  }

  const getData = () => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM Clientes",
          [],
          (tx, results) => {
            var len = results.rows.length;
            if (len > 0) {
              navigation.navigate('Home')
            }

          }
        )
      })
    } catch (error) {
      console.log(error);
    }
  }

  const setData = async () => {
    if (nome.length == 0 || sobrenome.length == 0) {
      /* Alert.alert('Warning!', "Please write your data.") */
    } else {
      try {
        db.transaction(async (tx) => {
          await tx.executeSql(
            "INSERT INTO Clientes (Nome, Sobrenome, Telefone, WhatsApp,"
            + "Email, DiasEntrega PrefContato, TipoEstabelecimento, EntregaRastreavel) VALUES (?,?,?,?,?,?,?,?,?)",
            [nome, sobrenome, telefone, whatsApp, email, diasEntrega, contato, tipoEstabelecimento, isEnable]
          );
        })
        console.log(nome, sobrenome, telefone, whatsApp, email, diasEntrega, contato, tipoEstabelecimento, isEnable)
        navigation.navigate('Home');
      } catch (error) {
        console.log(error);
      }
    }
  }

  const onChangeNome = (textNome: React.SetStateAction<string>) => {
    setNome(textNome)
  }

  const onChangeSobrenome = (textSobrenome: React.SetStateAction<string>) => {
    setSobrenome(textSobrenome)
  }

  const onChangeTelefone = (textTelefone: React.SetStateAction<string>) => {
    setTelefone(textTelefone)
  }

  const onChangeWhatsApp = (textWhatsApp: React.SetStateAction<string>) => {
    setWhatsApp(textWhatsApp)
  }

  const onChangeEmail = (textEmail: React.SetStateAction<string>) => {
    setEmail(textEmail)
  }

  const alternarSwitch = () => {
    setIsEnable(previousState => !previousState)
  }

  const cadastro = () => {
    Alert.alert('Cliente Cadastrado');
  }

  const img = './imgs/background.jpg'

  const dias = [{ text: 'Segunda-Feira', id: 'Segunda-Feira' },
  { text: 'Terça-Feira', id: 'Terça-Feira' },
  { text: 'Quarta-Feira', id: 'Quarta-Feira' },
  { text: 'Quinta-Feira', id: 'Quinta-Feira' },
  { text: 'Sexta-Feira', id: 'Sexta-feira' }
  ]

  const prefContato = [{ text: 'WhatsApp', id: 'WhatsApp' },
  { text: 'Fax', id: 'Fax' },
  { text: 'E-mail', id: 'Email' },
  { text: 'Telefonema', id: 'Telefonema' }
  ]


  const estabelecimento = [{ text: 'Residencial', id: 'Residencial' },
  { text: 'Comercial', id: 'Comercial' }
  ]

  return (
    <View style={styles.container}>

      <ImageBackground
        source={require(img)}
        style={styles.imgFundo}
      >
        <ScrollView
          contentContainerStyle={{
            height: 1000,
            justifyContent: "space-around",
            alignItems: 'center',
          }}
        >
          <Text style={styles.text}>Cadastre seu cliente</Text>



          <TextInput style={styles.textInput} placeholder='Nome'
            placeholderTextColor='#f8f8ff' onChangeText={textNome => onChangeNome(textNome)} />

          <TextInput style={styles.textInput} placeholder='Sobrenome'
            placeholderTextColor='#f8f8ff' onChangeText={textSobrenome => onChangeSobrenome(textSobrenome)} />

          <TextInput style={styles.textInput} placeholder='Telefone'
            placeholderTextColor='#f8f8ff' onChangeText={textTelefone => onChangeTelefone(textTelefone)} />


          <TextInput style={styles.textInput} placeholder='Telefone WhatsApp'
            placeholderTextColor='#f8f8ff' onChangeText={textWhatsApp => onChangeWhatsApp(textWhatsApp)} />

          <TextInput style={styles.textInput} placeholder='Email'
            placeholderTextColor='#f8f8ff' onChangeText={textEmail => onChangeEmail(textEmail)} />






          <Text style={styles.textCheck1}>Dia que deseja receber a entrega</Text>

          <CheckBoxDias options={dias} onChange={(op) => {
            console.log(op)
            setDiasEntrega(op)}} 
            multiple/>

          <Text style={styles.textCheck}>Preferencia de Contato</Text>

          <CheckBox options={prefContato} onChange={(op) => setContato(op)} />

          <Text style={styles.textCheck}>Tipo de Estabelecimento</Text>

          <CheckCircle options={estabelecimento} onChange={(op) => setTipoEstabelecimento(op)} multiple/>

          <View style={{ flexDirection: 'row' }}>

            <Text style={styles.textCheck}>Entrega Rastreavel?</Text>

            <Switch trackColor={{ true: "#3ebd93", false: "#2e2e2e" }}
              thumbColor={!isEnable ? "#d3d3d3" : "#3edb93"}
              onValueChange={alternarSwitch}
              value={isEnable}
              style={{ marginLeft: 10 }}
            />
          </View>

          <LinearGradient colors={['#A62A5C', '#6A2597']} start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 1 }} locations={[.2, 0.8]} style={styles.linearGradient} >
            <TouchableOpacity onPress={() => setData()}>
              <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
          </LinearGradient>

        </ScrollView>
      </ImageBackground>
    </View>
  );
}



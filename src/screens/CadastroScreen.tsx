import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Alert, ImageBackground, Switch, ScrollView } from "react-native";
import styles from './Styles/StyleCadastro';
import LinearGradient from "react-native-linear-gradient";
import CheckBox, { CheckCircle } from "./Index";

export function CadastroScreen({ navigation }) {

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [whatsApp, setWhatsApp] = useState('')
  const [email, setEmail] = useState('')
  const [isEnable, setIsEnable] = useState(false)

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

  const options = [{ text: 'Segunda-Feira', id: 1 },
  { text: 'Terça-Feira', id: 2 },
  { text: 'Quarta-Feira', id: 3 },
  ]
  const options2 = [{ text: 'Quinta-Feira', id: 4 },
  { text: 'Sexta-Feira', id: 5 }
  ]

  const contato = [{ text: 'WhatsApp', id: 6 },
  { text: 'Fax', id: 7 }
  ]

  const contato2 = [{ text: 'E-mail', id: 8 },
  { text: 'Telefonema', id: 9 }
  ]


  const tipoEstabelecimento = [{ text: 'Residencial', id: 10 },
  { text: 'Comercial', id: 11 }
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






          <Text style={styles.textCheck}>Dia que deseja receber a entrega</Text>

          <CheckBox options={options} onChange={(op) => Alert.alert(op)} />
          <CheckBox options={options2} onChange={(op) => Alert.alert(op)} />

          <Text style={styles.textCheck}>Preferencia de Contato</Text>

          <CheckBox options={contato} onChange={(op) => Alert.alert(op)} />
          <CheckBox options={contato2} onChange={(op) => Alert.alert(op)} />

          <Text style={styles.textCheck}>Tipo de Estabelecimento</Text>

          <CheckCircle options={tipoEstabelecimento} onChange={(op) => Alert.alert(op)} />

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
            <TouchableOpacity onPress={() => cadastro()}>
              <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
          </LinearGradient>

        </ScrollView>
      </ImageBackground>
    </View>
  );
}



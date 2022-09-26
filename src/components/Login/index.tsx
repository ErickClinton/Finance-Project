
import { View, Text, Image, TextInput, TouchableOpacity,Button} from 'react-native';
import {Logo} from '../../../assets/drawable-xxxhdpi-icon.png'
import { Background } from '../Background';
import { styles } from './styles';
import React from 'react';
export function Login() {
  const [text, setText] = React.useState("");
  const [senha, setSenha] = React.useState("");


  function teste(){
      console.log(text)
      console.log(senha)
  }
  return (

    <View style={styles.container}>
        <Image source={require('../../../assets/drawable-xxxhdpi-icon.png')} style={styles.Logo} ></Image>
        <Text>Welcome to app!</Text>
        <TextInput 
          autoCapitalize='sentences' 
          style={styles.Entradas} 
          placeholder="Login"  
          onChangeText={setText}
          value={text}
          />
          
          
      

        <TextInput autoCapitalize='sentences'  
          style={styles.Entradas} 
          placeholder="Senha"
          secureTextEntry 
          onChangeText={setSenha}
          value={senha}
          
        />
          
        
        
        <TouchableOpacity style={styles.Botao} activeOpacity={0.8} onPress={teste} >
          
          <Text style={styles.Texto}>Entrar</Text>
        </TouchableOpacity>

        
    </View>

    
  );
}
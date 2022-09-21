
import { View, Text, Image, TextInput, TouchableOpacity,Button} from 'react-native';
import {Logo} from '../../../assets/drawable-xxxhdpi-icon.png'
import { Background } from '../Background';
import { styles } from './styles';
import React from 'react';
export function Login() {
  const [text, onChangeText] = React.useState("");
  const [senha, onChangeSenha] = React.useState("");
  return (

    <View style={styles.container}>
        <Image source={require('../../../assets/drawable-xxxhdpi-icon.png')} style={styles.Logo} ></Image>
        <Text>Welcome to app!</Text>
        <TextInput autoCapitalize='sentences' style={styles.Entradas} placeholder="Login"  onChangeText={onChangeText} value={text}></TextInput>

        <TextInput autoCapitalize='sentences'  style={styles.Entradas} placeholder="Senha"secureTextEntry onChangeText={onChangeSenha} value={senha}></TextInput>

        <TouchableOpacity style={styles.Botao} activeOpacity={0.8}>
            <Text style={styles.Texto}>Entrar</Text>
        </TouchableOpacity>

        
    </View>

    
  );
}
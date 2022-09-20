
import { View, Text, Image, TextInput, TouchableOpacity,Button} from 'react-native';
import {Logo} from '../../../assets/drawable-xxxhdpi-icon.png'
import { Background } from '../Background';
import { styles } from './styles';

export function Login() {
  return (

    <View style={styles.container}>
        <Image source={require('../../../assets/drawable-xxxhdpi-icon.png')} style={styles.Logo}></Image>
        <Text>Welcome to app!</Text>
        <TextInput autoCapitalize='sentences' style={styles.Entradas} placeholder="Login"></TextInput>

        <TextInput autoCapitalize='sentences'  style={styles.Entradas} placeholder="Senha"secureTextEntry></TextInput>

        <TouchableOpacity style={styles.Botao} activeOpacity={0.8}>
            <Text style={styles.Texto}>Entrar</Text>
        </TouchableOpacity>

        
    </View>

    
  );
}
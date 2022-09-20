import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Background } from './src/components/Background';
import { Heading } from './src/components/Heading';
import { Login } from './src/components/Login';

export default function App() {
  return (

      
      <Background>
        <StatusBar translucent backgroundColor='transparent' barStyle="dark-content"/>
        <Login/>
      </Background>

  );
}

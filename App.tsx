import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Background } from './src/components/Background';
import { Heading } from './src/components/Heading';

export default function App() {
  return (
    <Background>
      <Heading/>
    </Background>
  );
}

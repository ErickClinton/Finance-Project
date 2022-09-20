import { StyleSheet } from 'react-native';
import { THEME } from '../../../global/globalThemes';
export const styles = StyleSheet.create({
  container: {
    marginTop:80,
    marginRight:10,
    marginLeft:10,
    height:300,
    width:300,
    backgroundColor:THEME.COLORS.White_Back,
    borderRadius:20,
    
    
  },
  Logo:{
    width:100,
    marginLeft:100,
    height:100,
    marginBottom:10
  },
  Login:{
    marginTop:20,
    marginLeft:10
    
  },
  Senha:{
    marginTop:30,
    marginLeft:10
  },
  Entradas:{
    
    width:'100%',
    height:35,
    backgroundColor:THEME.COLORS.Gray_Back,
    borderRadius:20,
    marginTop:15
  },
  Botao:{
    marginTop:20,
    marginLeft:25,
    width:'80%',
    height:40,
    borderRadius:10,
    alignItems:'center',
    backgroundColor:'green',
    
  },
  Texto:{
    color:THEME.COLORS.White_Back,
    marginTop:10
  }
});
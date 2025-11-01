
import { View,Text, StyleSheet, TextInput, Image } from "react-native";

export default function App() {

  return (
    <View style={styles.container}>
      
      <View style={styles.cabeçalho}>
        <Text style={styles.tituloLista}>Tarefas Diárias</Text>  
      </View>
      <View style={styles.corpo}>
        <View style={styles.ferramentas}>
          <TextInput style={styles.input} placeholder="Procurar tarefa..."></TextInput>
          <Image source={require('./assets/Search.png')}/>
          <Image source={require('./assets/Create.png')}/>
          <Image source={require('./assets/Delete.png')}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cabeçalho: {
    justifyContent: 'center',
    width: 330,
    height: 100,
    backgroundColor: "#4ADCF3",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 8,
  },
  tituloLista: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    color: '#FFF8F1',
  },

  corpo: {
    backgroundColor: '#F8EDD9',
    width: 330,
    height: 370,
    elevation: 8,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  input: {
    backgroundColor: '#D9D9D9',
    height:32,
    width:240,
    margin: 15,
    borderRadius: 100,
  }
  


  
})

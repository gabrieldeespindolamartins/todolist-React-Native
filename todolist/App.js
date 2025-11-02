
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
          <Image style={styles.imagens} source={require('./assets/search.png')}/>
          <Image style={styles.imagens} source={require('./assets/create.png')}/>
          <Image style={styles.imagens} source={require('./assets/delete.png')}/>
        </View>

        <View style={{height: 1, width: 320, backgroundColor: '#D9D9D9', alignSelf: "center"}}/>

        <View style={styles.corpoTarefa}>
            <View style={styles.tarefa}>
              <Image style={styles.completed} source={require('./assets/completed.png')}/>
              <View style={styles.textoTarefa}>
                <Text style={styles.tituloTarefa}>Titulo da Tarefa</Text>
                <Text style={styles.descricaoTarefa}>Passear com o cachoro no horario combinado.</Text>
              </View>
              <Image style={styles.edit} source={require('./assets/edit.png')}/>
              <Image style={styles.move} source={require('./assets/move.png')}/>
            </View>
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
  //-----------------------------------Cabeçalho---------------------------------------------//
  cabeçalho: {
    justifyContent: 'center',
    width: 350,
    height: 120,
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

  //-----------------------------------Corpo---------------------------------------------//
  corpo: {
    backgroundColor: '#F8EDD9',
    width: 350,
    height: 390,
    elevation: 8,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  //-----------------------------------Barra de ferramentas---------------------------------------------//
  ferramentas: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#D9D9D9',
    height: 32,
    width: 200,
    borderRadius: 100,
  },  
  imagens:{
    width: 20,
    height: 20,
    backgroundColor:'#FFF8F1',
    borderRadius: 100,
    padding: 15,
    marginHorizontal: 3,
  },

//-----------------------------------Tarefas---------------------------------------------//
completed: {
  height: 40,
  width: 40,
  margin: 10,
},

tarefa: {
  flexDirection: 'row',
  alignItems: 'center',

  width: 310,
  minHeight: 50,
  backgroundColor: "#4ADCF3",
  borderRadius: 10  ,
},

corpoTarefa: {
  alignItems: 'center',
  marginTop: 20,
},

textoTarefa: {
  paddingTop: 5,
  paddingBottom: 5,
},

tituloTarefa: {
  color: '#FFF8F1',
  fontSize: 18,
  fontWeight: '500',
},

descricaoTarefa:{
  color: '#FFF8F1',
  fontSize: 12,
  width: 140,
},

edit: {
  width: 32,
  height: 35,
},

move: {
  width: 40,
  height: 40,
  marginLeft: 20,
},

})

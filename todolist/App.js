
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
          <View style={styles.imagemBorda}><Image style={styles.imagens} source={require('./assets/search.png')}/></View>
          <View style={styles.imagemBorda}><Image style={styles.imagens} source={require('./assets/create.png')}/></View>
          <View style={styles.imagemBorda}><Image style={styles.imagens} source={require('./assets/delete.png')}/></View>
        </View>

        <View style={{height: 1, width: 350, backgroundColor: '#D9D9D9', alignSelf: "center"}}/>

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
    elevation: 12,
  },
  tituloLista: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    color: '#FFFFFF',
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#D9D9D9',
    height: 30,
    width: 200,
    borderRadius: 100,
    paddingLeft: 13,
    color: '#808080',
  },  
  imagemBorda: {
    width: 35,
    height: 35,
    backgroundColor:'#FFFFFF',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent:'center',
  },  
  imagens:{
    width: 25,
    height: 25,
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
  justifyContent: 'space-between',

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
  color: '#FFFFFF',
  fontSize: 18,
  fontWeight: '500',
},

descricaoTarefa:{
  color: '#FFFFFF',
  fontSize: 12,
  width: 130,
},

edit: {
  width: 32,
  height: 35,
  marginRight: 10,
},

move: {
  width: 40,
  height: 40,
  marginRight: 10,
},

})

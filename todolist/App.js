
import { View,Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import styles from './src/components/styles.js'

export default function App() {
    const handleSearch = () => {};
    const handleCreate = () => {};
    const handleDelete = () => {};

    const handleCompleted = () => {};
    const handleEdit = () => {};
    const handleMove = () => {};

  return (
    <View style={styles.container}>
      
      <View style={styles.listaBar}>
        <View style={styles.actualBar}/>
        <View style={styles.square}></View>
        <View style={styles.arco}/>
      </View>

      <View style={styles.cabeçalho}>
        
        <Text style={styles.tituloLista}>Tarefas Diárias</Text>  
      </View>

      <View style={styles.corpo}>

        <View style={styles.ferramentas}>
          <TextInput style={styles.input} placeholder="Procurar tarefa..."></TextInput>
          <View style={styles.imagensContainer}>
            
          <TouchableOpacity onPress={handleSearch}>
            <View style={styles.imagemBorda}><Image style={styles.imagens} source={require('./assets/Search.png')}/></View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleCreate}>
            <View style={styles.imagemBorda}><Image style={styles.imagens} source={require('./assets/Create.png')}/></View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleDelete}>
            <View style={styles.imagemBorda}><Image style={styles.imagens} source={require('./assets/Delete.png')}/></View>
          </TouchableOpacity>

          </View>
        </View>

        <View style={{height: 1, width: 350, backgroundColor: '#D9D9D9', alignSelf: "center"}}/>

        <View style={styles.corpoTarefa}>
            <View style={styles.tarefa}>
              <TouchableOpacity onPress={handleCompleted}>
                <Image style={styles.completed} source={require('./assets/completed.png')}/>
              </TouchableOpacity>
              <View style={styles.textoTarefa}>
                <Text style={styles.tituloTarefa}>Titulo da Tarefa</Text>
                <Text style={styles.descricaoTarefa}>Passear com o cachoro no horario combinado.</Text>
              </View>
              <TouchableOpacity onPress={handleEdit}>
              <Image style={styles.edit} source={require('./assets/edit.png')}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleMove}>
              <Image style={styles.move} source={require('./assets/move.png')}/>
              </TouchableOpacity>
            </View>
        </View>

      </View>

    </View>
  );
}

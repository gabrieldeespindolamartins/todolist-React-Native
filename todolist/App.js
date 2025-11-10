
import { View,Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
import styles from './src/components/styles.js'
import { useEffect, useState } from "react";

export default function App() {
    const [editModal, setEditModal] = useState(false);
    const [createModal, setCreateModal] = useState(false);
    const [tarefas, setTarefas] = useState([]);

//-----------------------------------Get tarefas-------------------------------------//

    async function buscarTarefas() {
      const response = await fetch('https://69037f71d0f10a340b249914.mockapi.io/tasks', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      })
      const data = await response.json();
      setTarefas(data)
      }

      useEffect(() => {
        buscarTarefas();
      }, []);

//-------------------------------------atualizar-----------------------------------------//

    async function deletarTarefa(item) {
      const response = await fetch(`https://69037f71d0f10a340b249914.mockapi.io/tasks/${item.taskId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'},
      });
             
        buscarTarefas();
      }
    

//-----------------------------------------deletar----------------------------------------------//

async function atualizarStatus(item) {
  const response = await fetch(`https://69037f71d0f10a340b249914.mockapi.io/tasks/${item.taskId}`, {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json',
  },
    body: JSON.stringify({
      ...item,
    completed: !item.completed,       
    })
  })
 const data = await response.json();
 buscarTarefas();
}

//-------------------------------------Criar Tarefas-------------------------------------------//

async function criarTarefa(item) {
  const response = await fetch(`https://69037f71d0f10a340b249914.mockapi.io/tasks/${item.taskId}`, {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json',
  },
    body: JSON.stringify({
      ...item,
    completed: !item.completed,       
    })
  })
 const data = await response.json();
 buscarTarefas();
}

//-----------------------------------cabeçalho--------------------------------------------------//
  return (
    
    <View style={styles.container}>
      
      <View style={styles.listaBar}>
        <View style={styles.actualBar}/>
        <View style={styles.square}></View>
        <View style={styles.arco}/>
      </View>

      <View style={styles.cabeçalho}>
      
        <Text style={styles.tituloLista}>Tarefas Diárias</Text>  

       {/*------------------------------------------------ferramentas----------------------------------------------*/}

      </View>

      <View style={styles.corpo}>

        <View style={styles.ferramentas}>
          <TextInput style={styles.input} placeholder="Procurar tarefa..."></TextInput>
          <View style={styles.imagensContainer}>
            
          <TouchableOpacity>
            <View style={styles.imagemBorda}><Image style={styles.imagens} source={require('./assets/Search.png')}/></View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setCreateModal(true)}>
            <View style={styles.imagemBorda}><Image style={styles.imagens} source={require('./assets/Create.png')}/></View>
          </TouchableOpacity>

          </View>
        </View>
        {/*-----------------------------------------------createModal-----------------------------------------------*/}
        <Modal visible={createModal} transparent={true}>
                  <View style={{flex:1, justifyContent:'center', alignItems:'center', }}>
                    <View style={{justifyContent: 'center', alignItems:'center', backgroundColor: '#4ADCF3', borderRadius: 10, }}>
                   
                      <TextInput placeholder="Titulo" style={styles.modalTextInput}></TextInput>
                      <TextInput placeholder="Decrição" style={styles.modalTextInput}></TextInput>
                        <View style={styles.modalButtonContent}> 
                          <TouchableOpacity style={styles.modalButton}>Criar</TouchableOpacity>
                          <TouchableOpacity onPress={() => setCreateModal(false)} style={styles.modalButton}>Cancelar</TouchableOpacity>
                        </View>
                    </View>
                  </View>
              </Modal>
        {/*-----------------------------------------------linha-----------------------------------------------*/}

        <View style={{height: 1, width: 350, backgroundColor: '#D9D9D9', alignSelf: "center"}}/>

        {/*---------------------------------------------tarefas-------------------------------------------------*/}

        <ScrollView style={styles.scroll}>
          {tarefas.map((item) =>
            <View key={item.taskId} style={styles.tarefa}>
              <TouchableOpacity onPress={() => atualizarStatus(item)}>
                {item.completed ? 
                <Image style={styles.completed} source={require('./assets/completed.png')}/>
                 :
                <Image style={styles.completed} source={require('./assets/Pendente.png')}/>
                }
              </TouchableOpacity>

              <View style={styles.textoTarefa}>
                <Text style={styles.tituloTarefa}>{item.title}</Text>
                <Text style={styles.descricaoTarefa}>{item.description}</Text>
              </View>
        {/*-------------------------------------------------editmodal e delete----------------------------------------------*/}
              <Modal visible={editModal} transparent={true}>
                  <View style={{flex:1, justifyContent:'center', alignItems:'center', }}>
                    <View style={{justifyContent: 'center', alignItems:'center', backgroundColor: '#4ADCF3', borderRadius: 10, }}>
                   
                      <TextInput placeholder="Titulo" style={styles.modalTextInput}></TextInput>
                      <TextInput placeholder="Decrição" style={styles.modalTextInput}></TextInput>
                        <View style={styles.modalButtonContent}> 
                          <TouchableOpacity style={styles.modalButton}>Confirmar</TouchableOpacity>
                          <TouchableOpacity onPress={() => setEditModal(false)} style={styles.modalButton}>Cancelar</TouchableOpacity>
                        </View>
                    </View>
                  </View>
              </Modal>
        {/*----------------------------------------------------------------------------------------------------------------*/}
              <TouchableOpacity onPress={() => setEditModal(true)}>
              <Image style={styles.edit} source={require('./assets/edit.png')}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => deletarTarefa(item)}>
              <Image style={styles.delete} source={require('./assets/delete.png')}/>
              </TouchableOpacity>
            </View>
            )}
        </ScrollView>

      </View>

    </View>
  );
}

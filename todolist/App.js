//link para prototipo figma: https://www.figma.com/design/H1ECI4GMmT1UzLsLQzlvhi/Taskit?t=oGdN2JWqL3Dv3dtk-0//
import { View,Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
import styles from './src/components/styles.js'
import { useEffect, useState } from "react";

export default function App() {
    const [tarefas, setTarefas] = useState([]);

    const [editModal, setEditModal] = useState(false);
    const [tarefaEditando, setTarefaEditando] = useState(null);
    const [editTitle, setEditTitle] = useState("");
    const [editDesc, setEditDesc] = useState("");

    const [createModal, setCreateModal] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newDesc, setNewDesc] = useState("");

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

//-------------------------------------deletar-----------------------------------------//

    async function deletarTarefa(item) {
      const response = await fetch(`https://69037f71d0f10a340b249914.mockapi.io/tasks/${item.taskId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'},
      });
             
        buscarTarefas();
      }
    

//-----------------------------------------atualizarStatus----------------------------------------------//

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
 buscarTarefas();
}

//-----------------------------------------editarTarefa----------------------------------------------//

async function editarTarefa(item) {
  const response = await fetch(`https://69037f71d0f10a340b249914.mockapi.io/tasks/${item.taskId}`, {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json',
  },
    body: JSON.stringify({
    ...tarefaEditando, // mantém os outros campos
    title: editTitle,
    description: editDesc,
    })
  })

 setEditModal(false);
 buscarTarefas();
}

//-------------------------------------Criar Tarefas-------------------------------------------//

async function criarTarefa(item) {
  const response = await fetch(`https://69037f71d0f10a340b249914.mockapi.io/tasks`, {
  method: 'POST', 
  headers: {
    'Content-type': 'application/json',
  },
    body: JSON.stringify({
      title: newTitle,
      description: newDesc,
      completed: false,

    })
  })
 const data = await response.json();

 setNewTitle("");
 setNewDesc("");
 setCreateModal(false);

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
                   
                      <TextInput placeholder="Titulo" style={styles.modalTextInput} value={newTitle} onChangeText={setNewTitle}></TextInput>
                      <TextInput placeholder="Decrição" style={styles.modalTextInput} value={newDesc} onChangeText={setNewDesc}></TextInput>
                        <View style={styles.modalButtonContent}> 
                          <TouchableOpacity onPress={criarTarefa} style={styles.modalButton}>
                            <Text>Criar</Text> 
                          </TouchableOpacity>

                          <TouchableOpacity onPress={() => setCreateModal(false)} style={styles.modalButton}>
                            <Text>Cancelar</Text> 
                          </TouchableOpacity>
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
                   
                      <TextInput placeholder="Titulo" style={styles.modalTextInput}  value={editTitle} onChangeText={setEditTitle}></TextInput>
                      <TextInput placeholder="Decrição" style={styles.modalTextInput}  value={editDesc} onChangeText={setEditDesc}></TextInput>
                        <View style={styles.modalButtonContent}> 
                        <TouchableOpacity onPress={() => editarTarefa(tarefaEditando)} style={styles.modalButton}>
                          <Text>Confirmar</Text> 
                        </TouchableOpacity>
                          <TouchableOpacity onPress={() => setEditModal(false)} style={styles.modalButton}>
                            <Text>Cancelar</Text>
                          </TouchableOpacity>
                        </View>
                    </View>
                  </View>
              </Modal>
        {/*----------------------------------------------------------------------------------------------------------------*/}
              <TouchableOpacity onPress={() => {setTarefaEditando(item); setEditTitle(item.title); setEditDesc(item.description); setEditModal(true);}}>
              <Image style={styles.edit} source={require('./assets/edit.png')}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => deletarTarefa(item)}>
              <Image style={styles.delete} source={require('./assets/delete2.png')}/>
              </TouchableOpacity>
            </View>
            )}
        </ScrollView>

      </View>

    </View>
  );
}

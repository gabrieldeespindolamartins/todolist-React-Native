import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
   //-----------------------------------navbarLista---------------------------------------------//
   listaBar: {
    flexDirection:'row',
    marginRight:155,
   },
   
   actualBar: {
    height: 35,
    width: 180,
    backgroundColor: "#4ADCF3",
    
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  square:{ 
    height: 15,
    width: 15,
    marginTop: 20,
    backgroundColor: "#4ADCF3",
  },
 
  arco: {
    height: 15,
    width: 15,
    marginTop: 20,
    marginLeft:180,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 15,
    position: 'absolute',
  },
  //-----------------------------------Cabeçalho---------------------------------------------//
  cabeçalho: {
    justifyContent: 'center',
    width: 350,
    height: 100,
    backgroundColor: "#4ADCF3",
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
    position: 'absolute',
    backgroundColor: '#D9D9D9',
    height: 30,
    width: 270,
    borderRadius: 100,
    paddingLeft: 13,
    color: '#808080',
  },  

  imagensContainer: {
    flexDirection: 'row',
    marginLeft:240,
    alignItems: 'center',
 
  },
  imagemBorda: {
    width: 35,
    height: 35,
    backgroundColor:'#FFFFFF',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent:'center',
    marginLeft: 10,
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
  alignSelf: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  marginTop: 30,
  width: 280,
  minHeight: 50,
  backgroundColor: "#4ADCF3",
  borderRadius: 10  ,
},

scroll: {
  width: 330,
  alignSelf: 'center',
  maxHeight: 300,
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

delete: {
  width: 40,
  height: 40,
  marginRight: 10,
},

//-----------------------------------Tarefas---------------------------------------------//

modalButtonContent: {
  flexDirection: 'row',
},
modalTextInput: {
  
  alignSelf: 'flex-start',
  backgroundColor: '#FFFFFF',
  borderRadius: 5,
  marginLeft: 10,
  margin: 5,
},

modalButton: {
  backgroundColor: '#FFFFFF',
  margin: 10,
  padding: 5,
  borderRadius: 5,
  minWidth: 70,
  textAlign: 'center',
}


})

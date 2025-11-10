import { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function Api() {
  const [ tarefas, setTarefas ] = useState([]);

  useEffect(() => {
    fetch("https://6903b880d0f10a340b257047.mockapi.io/tasks")
      .then((res) => res.json())
      .then((data) => setTarefas(data))
      .catch((err) => console.log(err));
  }, []);

  return (
      <ScrollView>
        {tarefas.map((item) =>
          <View key={item.taskId}> 
            <text>{item.title}</text>
            <text>{item.description}</text>
            <text>{item.completed ? "Concluida" : "pendente"}</text>
          </View>
        )}
      </ScrollView>
  );
}
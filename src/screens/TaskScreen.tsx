import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  TextInput,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Definição dos tipos das tarefas
interface Task {
  nome: string;
  descricao: string;
  data: string;
  status: boolean;
}

const TASKS: Task[] = [
  {
    nome: "Estudar",
    descricao: "Estudar para DevInHouse",
    data: "16/09/2024",
    status: false,
  },
  {
    nome: "Comprar Mantimentos",
    descricao: "Comprar comida para a semana",
    data: "18/09/2024",
    status: true,
  },
];

const TaskScreen: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // Estado para armazenar as tarefas
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar o modal
  const [newTask, setNewTask] = useState<Task>({
    nome: "",
    descricao: "",
    data: "",
    status: false,
  }); // Nova tarefa
  const [filterText, setFilterText] = useState<string>(""); // Texto de filtro

  useEffect(() => {
    loadTasks();
    }, []);

  // Carregar tarefas do AsyncStorage
    const loadTasks = async () => {
    try {
        const storedTasks = await AsyncStorage.getItem("tasks");
        if (storedTasks) setTasks(JSON.parse(storedTasks));
        else setTasks(TASKS);
    } catch (error) {
        console.log(error);
    }
    };

  // Salvar nova tarefa
    const saveTask = async () => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setModalVisible(false);
    setNewTask({ nome: "", descricao: "", data: "", status: false });
    };

  // Alterar o status de uma tarefa (concluída ou não)
    const toggleTaskStatus = async (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = !updatedTasks[index].status;
    setTasks(updatedTasks);
    await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

  // Filtrar tarefas pelo nome
    const filteredTasks = tasks.filter((task) =>
    task.nome.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Lista de Tarefas</Text>

        <TextInput
        style={styles.filterInput}
        placeholder="Filtrar tarefas..."
        value={filterText}
        onChangeText={setFilterText}
      />

      <Button title="Nova Tarefa" onPress={() => setModalVisible(true)} />

      <FlatList
        data={filteredTasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => toggleTaskStatus(index)}
            style={[styles.taskCard, item.status && styles.completedTask]}
          >
            <Text style={styles.taskTitle}>{item.nome}</Text>
            <Text>{item.descricao}</Text>
            <Text>{item.data}</Text>
            <Text>Status: {item.status ? "Concluída" : "Pendente"}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Modal para adicionar nova tarefa */}
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContent}>
          <TextInput
            style={styles.input}
            placeholder="Título da Tarefa"
            value={newTask.nome}
            onChangeText={(text) => setNewTask({ ...newTask, nome: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Descrição"
            value={newTask.descricao}
            onChangeText={(text) => setNewTask({ ...newTask, descricao: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Data"
            value={newTask.data}
            onChangeText={(text) => setNewTask({ ...newTask, data: text })}
          />
          <Button title="Cancelar" onPress={() => setModalVisible(false)} />
          <Button title="Salvar" onPress={saveTask} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20 
    },
    title: { 
        fontSize: 24, 
        fontWeight: "bold", 
        marginBottom: 10 
    },
    filterInput: {
        marginBottom: 10,
        padding: 8,
        borderWidth: 1,
        borderRadius: 5,
    },
    taskCard: { 
        padding: 10, 
        marginVertical: 5, 
        borderWidth: 1, 
        borderRadius: 5 
    },
    completedTask: { 
        backgroundColor: "#d3f9d8" 
    },
    taskTitle: { 
        fontWeight: "bold" 
    },
    modalContent: { 
        flex: 1, 
        justifyContent: "center", 
        padding: 20 
    },
    input: { 
        padding: 10, 
        marginVertical: 5, 
        borderWidth: 1, 
        borderRadius: 5 
},
});

export default TaskScreen;

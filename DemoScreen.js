// Import necessary modules
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ImageBackground,
  Image
} from 'react-native';


// Functional component for the to-do app
const TodoApp = ({navigation}) => {
  // State to manage the list of tasks and the current task input
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

    
    

  // Function to add a new task to the list
  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { id: tasks.length.toString(), text: taskInput }]);
      setTaskInput('');
    }
  };
  

  // Function to remove a task from the list
  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  

  // Render function for individual task items
  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text style={styles.task}>{item.text}</Text>
      <TouchableOpacity onPress={() => removeTask(item.id)}>
        <Text style={styles.removeButton}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
    
      <View>
        <ImageBackground
        source={require('./images/anime2.webp')}
        style={styles.image}/>
      </View>
      <Text style={styles.header}>Todo App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter task"
          value={taskInput}
          onChangeText={(text) => setTaskInput(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
      style={styles.list}
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'snow'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    margin: 10,
    
    
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'darkblue',
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 10,
    fontSize: 20,
    borderRadius: 15,
    backgroundColor: 'lightskyblue'
    
  },
  addButton: {
    padding: 10,
    backgroundColor: 'hotpink',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'darkblue',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 15,
    margin: 10,
    backgroundColor: 'lightskyblue'
   
  },
  removeButton: {
    color: 'red',
  },
  task: {
    fontSize: 20,
  },
  
});

// Export the TodoApp component
export default TodoApp;

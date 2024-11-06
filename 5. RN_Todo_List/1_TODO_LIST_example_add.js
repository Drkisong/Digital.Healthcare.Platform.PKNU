import React, { useState } from 'react';
import { View, SafeAreaView, Image, Text, TextInput, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function App() {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
      if (task) 
      { 
        setTasks([...tasks, { text: task }]); // Add new task to the array
        setTask(''); // Clear the input field after adding
      }
    };
  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id)); // Keep tasks except the one with matching 'id'
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Text style={{padding:5, color:'blue', fontWeight:'bold', fontSize:30}}>
        <Ionicons name="bus" size={25} color="hotpink"/>
         To do list !!
        </Text>
      </View>

      <View>
        <Image source={{uri: 'https://images.velog.io/images/yhko1992/post/09c57b00-2ddb-488c-8ae0-0a319ea9fd77/todolist.png'}} style={{height:220}}/>
      </View>
      
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add a task..."
            value={task}
            onChangeText={(text) => setTask(text)}
          />

          <TouchableOpacity style={styles.addButton} onPress={addTask}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={() => setTasks([])}>
            <Text style={styles.buttonText}>Delete All</Text>
          </TouchableOpacity>
        </View>


        <ScrollView>
        <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.taskContainer}>
                <Text style={styles.taskText}>{item.text}</Text>
              </View>
            )}
        />
        </ScrollView>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'greenyellow',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  input: {
    flex:1,
    height: 50,
    borderColor: 'gold',
    borderWidth: 2,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor:'cyan',
  },
  addButton: {
    backgroundColor: '#a2d5f2',
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#ffaaa7',
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
  },

});

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';


const TodoApp = ({navigation}) => {
  
  return (
    <View style={styles.container}>
<View>
  
<TouchableOpacity onPress={() => navigation.navigate('Task')}>
<Image 
      source={require('./images/anime1.jpg')}
      style={{height: 200, width: 350, borderRadius: 20}}/>
      <Text style={styles.heading}>Todo List</Text>
</TouchableOpacity>
</View>
<View>
<TouchableOpacity onPress={() => navigation.navigate('Diary')}>
<Image 
      source={require('./images/anime3.jpg')}
      style={{height: 200, width: 350, borderRadius: 20, marginTop
      : 15}}/>
      <Text style={styles.heading1}>Diary</Text>
</TouchableOpacity>
</View>

         </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    position: 'absolute',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 200,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    margin: 10,
  },
  heading1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    position: 'absolute',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 50,
    marginTop: 20,
  },
});

export default TodoApp;

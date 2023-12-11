import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

export default function App() {
  const [entry, setEntry] = useState('');
  const [diaryEntries, setDiaryEntries] = useState([]);

  useEffect(() => {
    // Load diary entries from AsyncStorage on component mount
    loadDiaryEntries();
  }, []);

  const saveEntry = async () => {
    if (entry.trim() !== '') {
      const newEntries = [...diaryEntries, entry];
      setDiaryEntries(newEntries);
      await AsyncStorage.setItem('diaryEntries', JSON.stringify(newEntries));
      setEntry('');
    }
  };

  const loadDiaryEntries = async () => {
    try {
      const storedEntries = await AsyncStorage.getItem('diaryEntries');
      if (storedEntries !== null) {
        setDiaryEntries(JSON.parse(storedEntries));
      }
    } catch (error) {
      console.error('Error loading diary entries', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Diary App</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Write your diary entry..."
        value={entry}
        onChangeText={(text) => setEntry(text)}
      />
      <TouchableOpacity style={styles.button} onPress={saveEntry}>
        <Text style={styles.buttonText}>Save Entry</Text>
      </TouchableOpacity>
      <View style={styles.entriesContainer}>
        <Text style={styles.entriesHeader}>Diary Entries:</Text>
        {diaryEntries.map((item, index) => (
          <Text key={index} style={styles.entryText}>
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  entriesContainer: {
    marginTop: 20,
  },
  entriesHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  entryText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

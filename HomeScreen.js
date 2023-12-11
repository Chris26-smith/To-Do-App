import React from "react";
import { StyleSheet, View, StatusBar, Image, Text, TouchableOpacity} from "react-native";



const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <Text style={styles.kutty}>TO DO APP</Text>
          <Image
                source={require('./images/quill.jpg')}
                style={{width: 250, height: 250, marginTop: 25, marginLeft: -11, borderRadius: 300}}/>
            <TouchableOpacity onPress={() => navigation.navigate('Index')}>
                <View style={styles.button}>
                <Text style={styles.text}>GET STARTED</Text>
                </View>
                </TouchableOpacity>
                <Text style={styles.txt}>Do a cautious play</Text>
          </View>
    );
}

const styles =StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'skyblue'
},
  button: {
    backgroundColor: '#2196F3',
    marginBottom: 30,
    marginTop: 19,
    width: 260,
    height: 30,
    alignItems: 'center',
    borderRadius: 30,
  },
  kutty: {
    color: 'darkblue',
    fontSize: 30,
    fontFamily: 'times new roman',
    fontWeight: 'bold',
    marginTop: 50,
    textAlign: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    padding: 5,
  },
  txt:{
    fontSize: 30,
    color: 'black',
    fontFamily:'cursive'
  }
})
export default HomeScreen;
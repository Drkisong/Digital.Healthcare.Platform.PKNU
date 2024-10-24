//"Package.json" @React native, Snacks-Expo
//Before use this code, please install these package on the package.json.
/*{
  "dependencies": {
    "react-native-paper": "4.9.2",
    "@expo/vector-icons": "^14.0.3"
  }
}*/

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="heart" size={250} color="red" />
        <Text style={styles.countText}>{count}</Text>
      </View>

      <View>
        <Text style={styles.basicText}>
        Custom design button!!
        </Text>

        {/*Custom design button*/}      
        <TouchableOpacity style={styles.eventButton} onPress={() => setCount(count + 1)}>
          <Text style={styles.eventButtonText}>Increase Count</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resetButton} onPress={() => setCount(0)}>
          <Text style={styles.eventButtonText}>Reset Count</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={[styles.basicText, {marginTop:30}]}>
        The react-native supporting button!!
        </Text>
      
        {/*The Style is different between Android and IOS*/}      
        <Button
          title="Press me"
          color="gold"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
   
      </View>

    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  countText: {
    position: 'absolute',
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
    top: '32%',
  },
  eventButton: {
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#3378FF',
    borderRadius: 10,
  },
  eventButtonText: {
    fontSize: 20,
    color: 'white',
    alignSelf:'center'
  },
  resetButton: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#800080',
    borderRadius: 30,
  },
  basicText : {
    fontSize: 20,
    color: 'hotpink',
    alignSelf:'center',
     fontWeight:'bold',
  },
  rButton: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#800080',
    borderRadius: 30,
  },

});

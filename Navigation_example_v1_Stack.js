import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native'; // 네비게이션 컨테이너
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Stack 네비게이션
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

const Page1 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'lightgreen' }}>
      <Text style={{ fontSize: 25, margin: 10 }}>Page1</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <TouchableOpacity
          style={{ width: 80, height: 80, backgroundColor: 'aqua' }}
          onPress={() => navigation.navigate('P2')}>
          <Text>P2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: 80, height: 80, backgroundColor: 'aqua' }}
          onPress={() => navigation.navigate('P3')}>
          <Text>P3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: 80, height: 80, backgroundColor: 'aqua' }}
          onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: 25, margin: 10 }}>
          안녕하세요 page 1 입니다.
        </Text>
      </View>
    </View>
  );
};

const Page2 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'gold' }}>
      <Text style={{ fontSize: 25, margin: 10 }}>Page2</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <TouchableOpacity
          style={{ width: 80, height: 80, backgroundColor: 'lightgreen' }}
          onPress={() => navigation.navigate('P1')}>
          <Text>P1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: 80, height: 80, backgroundColor: 'lightgreen' }}
          onPress={() => navigation.navigate('P3')}>
          <Text>P3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: 80, height: 80, backgroundColor: 'lightgreen' }}
          onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Card>
          <Text style={{ fontSize: 25, margin: 20 }}> 오늘 행운의 동물 </Text>
          <Image
            style={styles.logo}
            source={require('./assets/p_animal.jpg')}
          />
        </Card>
      </View>
    </View>
  );
};

const Page3 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'steelblue' }}>
      <Text style={{ fontSize: 25, margin: 10 }}>Page3</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <TouchableOpacity
          style={{ width: 80, height: 80, backgroundColor: 'pink' }}
          onPress={() => navigation.navigate('P1')}>
          <Text>P1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: 80, height: 80, backgroundColor: 'pink' }}
          onPress={() => navigation.navigate('P2')}>
          <Text>P2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: 80, height: 80, backgroundColor: 'pink' }}
          onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 2, backgroundColor: 'steelblue' }}>
        <WebView
          style={styles.web_container}
          source={{ uri: 'https://sites.google.com/view/aihslab' }}
        />
      </View>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Text style={styles.paragraph}>Hello React Native!!!!</Text>

      <Stack.Navigator>
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Page3" component={Page3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  paragraph: {
    margin: 30,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'pink',
  },
  logo: {
    height: 200,
    width: 200,
  },
  web_container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

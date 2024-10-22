//"Package.json" @React native, Snacks-Expo
//Before use this code, please install these package on the package.json.
/*{
  "dependencies": {
    "@expo/vector-icons": "^14.0.3",
    "react-native-paper": "4.9.2",
    "react-native-screens": "3.31.1",
    "react-native-webview": "13.8.6",
    "react-native-reanimated": "~3.10.1",
    "@react-navigation/drawer": "6.7.2",
    "@react-navigation/native": "6.0.0",
    "react-native-vector-icons": "10.2.0",
    "react-native-gesture-handler": "~2.16.1",
    "@react-navigation/bottom-tabs": "6.6.1",
    "react-native-safe-area-context": "4.10.5",
    "react-native-vector-icons/MaterialIcons": "*"
  }
}
*/


import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { WebView } from 'react-native-webview';

function HomeScreen() {
  return <Text style={styles.paragraph}>Welcome!!</Text>;
}

function SearchScreen() {
  return ( 
    <View style={styles.web_container}>
      <Text style={{color:'blue', fontSize: 20, fontWeight: 'bold', margin:10}}>Informaiton</Text>
      <WebView source={{ uri: 'https://sites.google.com/view/aihslab' }}/>
    </View> 
  );
}

function NotificationScreen() {
  return (
    <ScrollView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gold'}}>
      <Text style={styles.paragraph}>Save the penguin</Text>
      <Image style={styles.logo} source={require('./assets/pp.jpg')} />
    </ScrollView>
    );
}

function MessageScreen() {
  return <Text style={styles.paragraph}>Message</Text>;
}

const Tab = createBottomTabNavigator(); // Drawer Navigation함수를 Drawer변수명으로 저장

const App = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName="Home" >
      <Tab.Screen name="Home" component={HomeScreen}
          options={{
            title: '홈',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }} />
      <Tab.Screen name="Search" component={SearchScreen}
          options={{
            title: '검색',
            tabBarIcon: ({color, size}) => (
              <Icon name="search" color={color} size={size} />
            ),
          }} />
      <Tab.Screen name="Notification" component={NotificationScreen} 
          options={{
            title: '알림',
            tabBarIcon: ({color, size}) => (
              <Icon name="notifications" color={color} size={size} />
            ),
          }}/>
      <Tab.Screen name="Message" component={MessageScreen} 
          options={{
            title: '메시지',
            tabBarIcon: ({color, size}) => (
              <Icon name="message" color={color} size={size} />
            ),
          }}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 20,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'hotpink',
  },
  logo: {
    height: 200,
    width:200,
  },
  web_container: {
    flex: 1,
  },
});

//
//
//
/*{
  "dependencies": {
    "@expo/vector-icons": "^14.0.3",
    "react-native-paper": "4.9.2",
    "react-native-screens": "3.31.1",
    "@react-navigation/native": "6.1.18",
    "@react-navigation/native-stack": "6.11.0",
    "react-native-safe-area-context": "4.10.5"
  }
} */

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, Image,  StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const JSON_URL = 'https://raw.githubusercontent.com/Drkisong/Digital.Healthcare.Platform.PKNU/refs/heads/main/server_data/login_info';

    fetch(JSON_URL)
      .then(response => response.json())
      .then(users => {
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
          navigation.navigate('Welcome', { userName: user.name, userProfileImg: user.profile }); // WelcomeScreen으로 이동
        } else {
          Alert.alert('로그인 실패', '이메일 또는 비밀번호가 일치하지 않습니다.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        Alert.alert('에러 발생', '로그인 요청 중 문제가 발생했습니다.');
      });
  };

  return (
    <View style={styles.container}>
    <View style={styles.titleImgcontainer}>
    <Image source ={require('./assets/Title_brain.png')} style={{height:250, width:250, }}/>
    </View>
    <View>
      <Text style={styles.title}>E-mail</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder=" 이메일 입력"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Text style={styles.title}>Password</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder=" 비밀번호 입력"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin} > 
        <Text style={styles.loginButtonText}> Login </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const WelcomeScreen = ({ route }) => {
  const { userName, userProfileImg } = route.params;
  return (
    <View style={styles.welcomecontainer}>
      <Image source = {{ uri: userProfileImg }} style={styles.welcomeImge}/>
      <Text style={styles.welcometext} >환영합니다, {userName}!</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Welcome' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9e000', //code for kakaotalk yellow 
    paddingHorizontal: 20,
  },
  titleImgcontainer:{
     alignItems:'center', padding: 30
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },
  inputContainer: {
    height: 50, 
    borderColor: 'gray', 
    borderWidth: 2, 
    marginBottom: 10,
    backgroundColor: 'white', 
  },
  loginButton: {
    backgroundColor: '#3662AA',
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  welcomecontainer:{ 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  welcomeImge :{
    width: 200, height: 200, borderRadius: 100, marginBottom: 20,
  },
  welcometext :{
   fontSize: 24,
   color:'hotpink',
  },
});

//"Package.json" @React native, Snacks-Expo
//Before use this code, please install these package on the package.json.
/*
{
  "dependencies": {
    "@expo/vector-icons": "^14.0.3",
    "react-native-paper": "4.9.2"
  }
}
*/

import React, { useState } from 'react';
import { View, SafeAreaView, TextInput, Button, Text, Alert, StyleSheet} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

// GitHub JSON에서 사용자 데이터를 가져와 로그인 확인
const handleLogin = () => {
const JSON_INFO_URL = 'https://raw.githubusercontent.com/Drkisong/Digital.Healthcare.Platform.PKNU/refs/heads/main/server_data/login_info';

fetch(JSON_INFO_URL)
  .then(response => response.json())
  .then(users => {
    // 입력된 이메일과 비밀번호를 GitHub JSON 데이터와 비교
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      setIsLoggedIn(true);
      Alert.alert('로그인 성공', `환영합니다, ${user.name}`);
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
  <SafeAreaView style={styles.container}>
    <View style={styles.loginInfo_container}>
      <Text style={styles.title_text}>이메일</Text>
      <TextInput
        style={styles.input_container}
        placeholder="  이메일 입력"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Text style={styles.title_text}>비밀번호</Text>
      <TextInput
        style={styles.input_container}
        placeholder="  비밀번호 입력"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="로그인" onPress={handleLogin} />
      {isLoggedIn && <Text style={{ marginTop: 50 ,fontSize: 20, fontWeight: 'bold' }}>로그인 상태: {isLoggedIn ? '로그인됨' : '로그인 안 됨'}</Text>}
    </View>
   </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#FAEBD7' //Color info.: Antiquewhite
  },
  loginInfo_container:{
    padding:15,
  },
  title_text:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },
  input_container:{
    height: 50, 
    borderColor: 'orange', 
    borderWidth: 3, 
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: 'khaki', 
  },
});

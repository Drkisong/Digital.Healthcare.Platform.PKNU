import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // 네비게이션 컨테이너 
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'; // Drawer 네비게이션
import { WebView } from 'react-native-webview';

function Page1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'steelblue' }}>
      <Text>Page1</Text>
      <Text style={styles.paragraph}>Take care your health !</Text>
    </View>
  );
}

function Page2({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gold'}}>
      <Text>Page2</Text>
      <Text style={styles.paragraph}>Save the penguin</Text>
      <Image style={styles.logo} source={require('./assets/pp.jpg')} />
    </ScrollView>
  );
}

const Page3 = ({ navigation }) => {
  return (
    <View style={styles.web_container}>
      <Text style={{color:'blue', fontSize: 20, fontWeight: 'bold', margin:10}}>Informaiton</Text>
      <WebView source={{ uri: 'https://sites.google.com/view/aihslab' }}/>
    </View> 
  );
}

function CustomDrawerContent (props) {
  return (
    <DrawerContentScrollView {...props} style={{backgroundColor:"seagreen"}}>
      <DrawerItemList {...props}/>
      <DrawerItem label="Copyright" onPress={() => alert("Copyright 2024. PKNU all right reserved.")} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator(); // Drawer Navigation함수를 Drawer변수명으로 저장

const App = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="P1" drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="P1" component={Page1} />
      <Drawer.Screen name="P2" component={Page2} />
      <Drawer.Screen name="Info." component={Page3} />
    </Drawer.Navigator>
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


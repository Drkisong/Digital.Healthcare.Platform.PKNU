//"Package.json" @React native, Snacks-Expo
//Before use this code, please install these package on the package.json.
/*{
  "dependencies": {
    "@expo/vector-icons": "^14.0.3",
    "react-native-paper": "4.9.2",
    "react-native-vector-icons": "10.2.0",
    "react-native-vector-icons/FontAwesome": "*",
    "@react-navigation/native": "6.0.0",
    "@react-navigation/bottom-tabs": "6.6.1",
    "react-native-safe-area-context": "4.10.5",
    "react-native-screens": "3.31.1"
  }
}
*/

import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, SafeAreaView, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// Mock data for stories and posts
const stories = [
  { id: '1', user: 'SpaceA', image: 'https://www.nasaspaceflight.com/wp-content/uploads/2023/08/NSF-2023-08-31-17-53-58-082-scaled.jpg' },
  { id: '2', user: 'PKNU', image: 'https://www.pknu.ac.kr/upload/raonkeditordata/2022/01/28/20220128_130921259_60942.png' },
  { id: '3', user: 'Nobel', image: 'https://img.jagranjosh.com/images/2024/October/10102024/nobel-prize-in-literature-2024-.webp' },
  { id: '4', user: 'Tesla', image: 'https://smilegate.ai/wp-content/uploads/2022/06/Tesla_optimus..jpg' }
];

const posts = [
  { id: '1', user: 'SpaceA', image: 'https://earthhow.com/wp-content/uploads/2018/08/Solar-System-Infographic.png', caption: 'Where are we?' },
  { id: '2', user: 'PKNU', image: 'https://itc.pknu.ac.kr/img/layout/over_img.jpg', caption: 'We are here in Chang-Ui Bilding!!' },
  { id: '3', user: 'Nobel', image: 'https://img.jagranjosh.com/images/2024/October/10102024/nobel-prize-in-literature-2024-.webp', caption: 'We got a novel prize in literature!!' },
  { id: '4', user: 'Tesla', image: 'https://smilegate.ai/wp-content/uploads/2022/06/Tesla_optimus..jpg', caption: 'Open up the world of Robotic AI!!!' }
];

// Story Component
const Story = ({ user, image }) => (
  <View style={styles.story}>
    <Image source={{ uri: image }} style={styles.storyImage} />
    <Text style={styles.storyUser}>{user}</Text>
  </View>
);

// Post Component
const Post = ({ user, image, caption }) => (
  <View style={styles.post}>
    <View style={styles.header}>
      <Text style={styles.username}>{user}</Text>
    </View>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.caption}>{caption}</Text>
  </View>
);

// Home Screen (Stories and Posts)
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={{padding:5, color:'blue', fontWeight:'bold', fontSize:30}}>
          <Icon name="rocket" size={30} color="#900"/>
             Song stargram
          <Icon name="rocket" size={30} color="#900" />
        </Text>
      </View>

      <ScrollView style={styles.container}>
        {/* Stories Section */}
        <View style={styles.storiesContainer}>
          <FlatList
            data={stories}
            horizontal
            renderItem={({ item }) => <Story user={item.user} image={item.image} />}
            keyExtractor={item => item.id}
          />
        </View>

        {/* Posts Section */}
        <FlatList
          data={posts}
          renderItem={({ item }) => <Post user={item.user} image={item.image} caption={item.caption} />}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// Search Screen
const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Search Screen</Text>
      </View>
    </SafeAreaView>
  );
};

// Notification Screen
const NotificationScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Notification Screen</Text>
      </View>
    </SafeAreaView>
  );
};

// Profile Screen
const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Profile Screen</Text>
      </View>
    </SafeAreaView>
  );
};

// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" >
        <Tab.Screen name="Home" component={HomeScreen} 
          options={{
              headerShown : false,
              //title: 'Home',
              tabBarIcon: ({color, size}) => (
                <Icon name="home" color={color} size={size} />
              ),
          }} />
        <Tab.Screen name="Search" component={SearchScreen} 
          options={{
              title: 'Search',
              tabBarIcon: ({color, size}) => (
                <Icon name="search" color={color} size={size} />
              ),
          }} />
        <Tab.Screen name="Notification" component={NotificationScreen} 
          options={{
              title: 'Notification',
              tabBarIcon: ({color, size}) => (
                <Icon name="paper-plane" color={color} size={size} />
              ),
          }} />
        <Tab.Screen name="Profile" component={ProfileScreen} 
          options={{
              title: 'Profile',
              tabBarIcon: ({color, size}) => (
                <Icon name="user" color={color} size={size} />
              ),
          }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

// Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  storiesContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  story: {
    alignItems: 'center',
    marginRight: 10,
  },
  storyImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  storyUser: {
    marginTop: 5,
    fontSize: 12,
  },
  post: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 300,
  },
  caption: {
    marginTop: 10,
    fontSize: 14,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
  },
});

export default App;

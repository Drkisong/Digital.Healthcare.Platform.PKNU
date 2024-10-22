//"Package.json" @React native, Snacks-Expo
//Before use this code, please install these package on the package.json.
/*{
  "dependencies": {
    "react-native-paper": "4.9.2",
    "@expo/vector-icons": "^14.0.3",
    "react-native-vector-icons/FontAwesome": "*",
    "react-native-vector-icons": "10.2.0"
  }
}
*/

import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, SafeAreaView, useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const stories = [
  { id: '1', user: 'user1', image: 'https://via.placeholder.com/100' },
  { id: '2', user: 'user2', image: 'https://via.placeholder.com/100' },
  { id: '3', user: 'user3', image: 'https://via.placeholder.com/100' }
];

const posts = [
  { id: '1', user: 'user1', image: 'https://via.placeholder.com/300', caption: 'Nice day out!' },
  { id: '2', user: 'user2', image: 'https://via.placeholder.com/300', caption: 'Enjoying the beach!' },
  { id: '3', user: 'user3', image: 'https://via.placeholder.com/300', caption: 'Great coffee!' }
];

const Story = ({ user, image, textStyle }) => (
  <View style={styles.story}>
    <Image source={{ uri: image }} style={styles.storyImage} />
    <Text style={[styles.storyUser, textStyle]}>{user}</Text>
  </View>
);

const Post = ({ user, image, caption,textStyle }) => (
  <View style={styles.post}>
    <View style={styles.header}>
      <Text style={[styles.username, textStyle]}>{user}</Text>
    </View>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={[styles.caption, textStyle]}>{caption}</Text>
  </View>
);

const App = () => {

    // Detect system color scheme (light or dark)
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';

    // Define styles for dark and light modes
    const backgroundStyle = {
      backgroundColor: isDarkMode ? '#000' : '#fff',
    };

    const textStyle = {
      color: isDarkMode ? '#fff' : '#000',
    };

  return (
    <SafeAreaView style={[styles.safeArea, backgroundStyle]}>
      <Text style={[styles.title, textStyle]}>
        <Icon name="star" size={30} color="gold" /> 
          Song stagram
        <Icon name="star" size={30} color="gold" />
      </Text>
          
    <ScrollView style={[styles.container, backgroundStyle]}>
        {/* Stories Section */}
        <View style={styles.storiesContainer}>
          <FlatList
            data={stories}
            horizontal
            renderItem={({ item }) => <Story user={item.user} image={item.image} textStyle={textStyle}/>}
            keyExtractor={item => item.id}
          />
        </View>

        {/* Posts Section */}
        <FlatList
          data={posts}
          renderItem={({ item }) => <Post user={item.user} image={item.image} caption={item.caption} textStyle={textStyle}/>}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

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
    color: '#333',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    padding: 5,
    },
});

export default App;

//
// Before use this code, please install these package on the package.json.
/*{
  "dependencies": {
    "@expo/vector-icons": "^14.0.3",
    "react-native-paper": "4.9.2"
  }
}
*/

import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        여자친구 
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

//"Package.json"
//Before use this code, please install these package on the package.json.
/*{
  "dependencies": {
    "react-native-csv": "0.2.0",
    "react-native-svg": "15.2.0",
    "@expo/vector-icons": "^14.0.3",
    "react-native-paper": "4.9.2",
    "react-native-chart-kit": "6.12.0"
  }
}
*/

import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';
import {LineChart} from "react-native-chart-kit";
import {Dimensions} from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    
      <Text style={styles.paragraph}>
        We can make a APP for healthcare  
      </Text>
      
      <Card>
        <AssetExample/>
      </Card>
      
      <Card>
        <Text style={styles.paragraph}>Line Chart for Healthcare</Text>
        <LineChart
          data={{
            labels: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun."],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          //yAxisLabel="bpm"
          yAxisSuffix="bpm"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
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
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;

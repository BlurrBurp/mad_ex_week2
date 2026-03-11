import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
const initialBoard = ['O', '','O','X','X','O','X','', 'O'];
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.middleContainer}>
          {initialBoard.map((cellValue, index) => (
            <View key={index} style={styles.cell}>
              <Text style={styles.text}>{cellValue}</Text>
            </View>
          ))}
        

          {/* <View style={styles.cell}><Text style={styles.text}>O</Text></View>
          <View style={styles.cell}><Text style={styles.text}></Text></View>
          <View style={styles.cell}><Text style={styles.text}>O</Text></View>
          <View style={styles.cell}><Text style={styles.text}>X</Text></View>
          <View style={styles.cell}><Text style={styles.text}>X</Text></View>
          <View style={styles.cell}><Text style={styles.text}>O</Text></View>
          <View style={styles.cell}><Text style={styles.text}>X</Text></View>
          <View style={styles.cell}><Text style={styles.text}></Text></View>
          <View style={styles.cell}><Text style={styles.text}>O</Text></View> */}

        
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4d4d4',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    // paddingTop: 250,
    // paddingBottom: 250,
    borderWidth: 20,
    borderColor: 'white',
  },

  innerContainer: {
    flex: 'flex-start',
    backgroundColor: 'rgb(235, 157, 14)',
    borderWidth: 2,
    borderColor: 'black',
    padding: 30,
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 20,

  },

  middleContainer: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#1c750a',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  cell: {
    backgroundColor: '#1c750a',
    borderWidth: 2,
    padding: 10,
    // width: '33.33%',
    height: '33.33%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    width: '33.33%',


  },

  text: {
    // padding: 10,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  }
});

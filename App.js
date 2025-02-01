import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import './global.css';


Mapbox.setAccessToken('sk.eyJ1IjoiamFxdWliaXMiLCJhIjoiY202bWZvODdjMGtmeTJtcHl1NnB5bXA1MiJ9.87f4lSh43tG1Qxvaus4K8A');

const App = () => {


  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map} />
        <Text className = "mb-4"> aaaaaaaa
        </Text>
        <Text className = "text-sm"> aaaaaaaa</Text>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1
  }
});

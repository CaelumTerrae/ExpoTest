import { StyleSheet, Text, View } from 'react-native';
import UploadScreen from './src/UploadScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up if you're Braedon.</Text>
      <UploadScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

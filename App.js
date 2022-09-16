import { StyleSheet, Text, View } from 'react-native';
import Joystick from './src/Joystick';
import UploadScreen from './src/UploadScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Joystick/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B6F9C9',
    flex: 1,
  },
});

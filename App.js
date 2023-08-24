import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Menu from './components/Menu';
import Body from './components/Body';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
  },
})

import { StyleSheet } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import MainNavigation from './src/navigation/MainNavigation';
import globalStyles from './src/styles/globalStyles';

function App() {
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[globalStyles.flex, styles.container]}>
        <MainNavigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 15
  }
})

export default App;

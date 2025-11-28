import { StyleSheet } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import MainNavigation from './src/navigation/MainNavigation';
import globalStyles from './src/styles/globalStyles';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

function App() {
  
  return (
    <Provider store={store}>
      <SafeAreaProvider>
      <SafeAreaView style={[globalStyles.flex, styles.container]}>
        <MainNavigation />
      </SafeAreaView>
    </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 15
  }
})

export default App;

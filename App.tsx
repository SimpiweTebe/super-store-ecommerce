/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.figLight}>
            Special for you light font
          </Text>
          <Text style={styles.figItalic}>
            Special for you italic font
          </Text>
          <Text style={styles.figBold}>
            Special for you bold font
          </Text>
          <Text style={styles.figExtraBold}>
            Special for you extra bold font
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
  figLight: {
    fontFamily: "Figtree-Light",
    fontSize: 20,
  },
  figBold: {
    fontFamily: "Figtree-Bold",
    fontSize: 20,
  },
  figItalic: {
    fontFamily: "Figtree-Light",
    fontStyle: 'italic',
    fontSize: 20,
  },
  figExtraBold: {
    fontFamily: "Figtree-ExtraBold",
    fontSize: 20,
  },
});

export default App;

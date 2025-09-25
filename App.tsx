import 'react-native-gesture-handler';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { useEffect } from 'react';
import { initDB } from './src/db/db';
import { initialize } from './src/services/Notification';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    const setup = async () => {
      try {
        await initDB();
        console.log('DB initialized in App.tsx');
      } catch (error) {
        console.error('DB init failed:', error);
      }
    };
    setup();
    initialize();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;

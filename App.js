import React from 'react';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const store = ConfigureStore();


export default function App() {
  return (
   <SafeAreaProvider>
      <Provider store={store}>
        <Main />
      </Provider>
   </SafeAreaProvider>
    
  );
}

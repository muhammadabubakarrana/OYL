import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/store';
import {CreateAccount, SetUpProfile, Signin} from './src/screens/auth';
import {Home} from './src/screens/app';
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={{flex: 1}}>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
}

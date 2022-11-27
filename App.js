import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import App2 from './App2';

import {store, persistor} from './src/state/store';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

export default function App(){
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <App2 />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};



import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import colors from './src/styles/colors';

import { Provider } from './src/context';
import { Navigation } from './src/Navigation';

export default function App() {
  return (
    <Provider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor={colors.header} barStyle="light-content" />
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

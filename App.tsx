import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import colors from './src/styles/colors';

import { CountdownProvider } from './src/context/Countdown';
import { GroupProvider } from './src/context/Group';
import { Navigation } from './src/Navigation';

const MainProvider: React.FC = ({ children }) => {
  return (
    <CountdownProvider>
      <GroupProvider>
        {children}
      </GroupProvider>
    </CountdownProvider>
  );
}

export default function App() {
  return (
    <MainProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor={colors.header} barStyle="light-content" />
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
      </SafeAreaView>
    </MainProvider>
  );
}

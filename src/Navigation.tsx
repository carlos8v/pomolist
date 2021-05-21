import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Home } from './pages/Home';

const Tab = createMaterialTopTabNavigator();

export function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Lista"
      swipeEnabled={true}
      tabBarOptions={{
        activeTintColor: '#01FFE1',
        inactiveTintColor: '#AEAEAE',
        style: { backgroundColor: '#454545' },
        indicatorStyle: { backgroundColor: '#01FFE1' },
      }}
    >
      <Tab.Screen name="Lista" component={Home} />
      <Tab.Screen name="Relógio" component={Home} />
    </Tab.Navigator>
  );
}

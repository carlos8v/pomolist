import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { List } from './pages/List';
import { Watch } from './pages/Watch';

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
      <Tab.Screen name="Lista" component={List} />
      <Tab.Screen name="Relógio" component={Watch} />
    </Tab.Navigator>
  );
}

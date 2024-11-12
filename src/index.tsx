import React from 'react';

import Cities from './Cities/Cities';
import City from './Cities/City';
import AddCity from './AddCity/AddCity';

import { colors } from './theme';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import type { TabsProps, CityType, Location, CitiesStackParamList } from './types';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const options = {
  headerStyle: {
    backgroundColor: colors.primary
  },
  headerTintColor: '#fff'
}

const CitiesNav: React.FC<TabsProps> = ({ cities, addLocation }) => (
  <Stack.Navigator screenOptions={options}>
    <Stack.Screen 
      name="Cities"
      component={Cities as React.ComponentType<any>}
      initialParams={{ cities }}
    />
    <Stack.Screen 
      name="City"
      component={City as React.ComponentType<any>}
      initialParams={{ addLocation, city: undefined }}
    />
  </Stack.Navigator>
);

const Tabs: React.FC<TabsProps> = ({ cities, addCity, addLocation }) => (
  <Tab.Navigator>
    <Tab.Screen 
      name="AddCity"
      component={AddCity as React.ComponentType<any>}
      initialParams={{ addCity }}
    />
    <Tab.Screen 
      name="Cities"
      component={CitiesNav as React.ComponentType<any>}
      initialParams={{ cities, addLocation }}
    />
  </Tab.Navigator>
);

export default Tabs;

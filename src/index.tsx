import React from 'react';

import Cities from './Cities/Cities';
import City from './Cities/City';
import AddCity from './AddCity/AddCity';

import { colors } from './theme';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import type { TabsProps } from './types';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const options = {
  headerStyle: {
    backgroundColor: colors.primary
  },
  headerTintColor: '#fff'
}

const CitiesNav: React.FC<TabsProps> = ({ cities, addLocation }) => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen
        name="CitiesList"
        options={{ title: 'Cities' }}
      >
        {props => <Cities {...props} cities={cities} />}
      </Stack.Screen>
      <Stack.Screen
        name="City"
        options={{ title: 'City' }}
      >
        {props => <City {...props} addLocation={addLocation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

const Tabs: React.FC<TabsProps> = ({ cities, addCity, addLocation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AddCity"
        options={{ title: 'Add City' }}
      >
        {(props) => <AddCity {...props} addCity={addCity} />}
      </Tab.Screen>
      <Tab.Screen
        name="Cities"
        options={{ title: 'Cities' }}
      >
        {(props) => <CitiesNav {...props} cities={cities} addLocation={addLocation} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}


export default Tabs;

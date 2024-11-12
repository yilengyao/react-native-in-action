import React from 'react';

import Cities from './Cities/Cities';
import City from './Cities/City';
import AddCity from './AddCity/AddCity';

import { colors } from './theme';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

interface Location {
  name: string;
  info: string;
}

interface CityType {
  city: string;
  country: string;
  id: string;
  locations: Location[];
}

interface TabsProps {
  screenProps: {
    cities: CityType[];
    addCity: (city: City) => void;
    addLocation: (location: Location, city: City) => void;
  }
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const options = {
  headerStyle: {
    backgroundColor: colors.primary
  },
  headerTintColor: '#fff'
}

const CitiesNav: React.FC<TabsProps> = ({ screenProps }) => (
  <Stack.Navigator screenOptions={options}>
    <Stack.Screen name="Cities">
      {props => <Cities {...props} cities={screenProps.cities} />}
    </Stack.Screen>
    <Stack.Screen name="City">
      {props => <City {...props} addLocation={screenProps.addLocation} />}
    </Stack.Screen>
  </Stack.Navigator>
);

const Tabs: React.FC<TabsProps> = ({ screenProps }) => (
  <Tab.Navigator>
    <Tab.Screen name="Cities">
      {props => <CitiesNav {...props} screenProps={screenProps} />}
    </Tab.Screen>
    <Tab.Screen name="AddCity">
      {props => <AddCity {...props} addCity={screenProps.addCity} />}
    </Tab.Screen>
  </Tab.Navigator>
);


export default Tabs;

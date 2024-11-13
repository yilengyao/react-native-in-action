import { NavigationProp, RouteProp } from '@react-navigation/native';

// Basic types
export interface Location {
  name: string;
  info: string;
}

export interface CityType {
  city: string;
  country: string;
  id: string;
  locations: Location[];
}

// Component Props
export interface CitiesProps {
  navigation: NavigationProp<any>;
  cities: CityType[];
}

export interface AddCityProps {
  navigation: NavigationProp<any>;
  route: RouteProp<any, any>;
  addCity: (city: CityType) => void;
}

export interface AddCityState {
  city: string;
  country: string;
}

export interface CityProps {
  addLocation: (location: Location, city: CityType) => void;
  navigation: NavigationProp<any>;
  route: {
    params: {
      city: CityType;
      addLocation: (location: Location, city: CityType) => void;
    };
  };
}

export interface CityState {
  name: string;
  info: string;
}

export interface TabsProps {
  cities: CityType[];
  addCity: (city: CityType) => void;
  addLocation: (location: Location, city: CityType) => void;
}

export interface CenterMessageProps {
  message: string;
}

// App State
export interface AppState {
  cities: CityType[];
}

// Navigation Types
export interface CitiesStackParamList {
  Cities: { cities: CityType[] };
  City: { addLocation: (location: Location, city: CityType) => void };
}

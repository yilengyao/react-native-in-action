import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src';
import type { AppState, CityType, Location } from './src/types';

export default class App extends Component<{}, AppState> {
  state: AppState = {
    cities: []
  };

  addCity = (city: CityType) => {
    const cities = [...this.state.cities, city];
    this.setState({ cities });
  };

  addLocation = (location: Location, city: CityType) => {
    const index = this.state.cities.findIndex(item => item.id === city.id);
    const chosenCity = {
      ...this.state.cities[index],
      locations: [...this.state.cities[index].locations, location]
    };
    const cities = [
      ...this.state.cities.slice(0, index),
      chosenCity,
      ...this.state.cities.slice(index + 1)
    ];
    this.setState({ cities });
  };

  render() {
    return (
      <NavigationContainer>
        <Tabs
          cities={this.state.cities}
          addCity={this.addCity}
          addLocation={this.addLocation}
        />
      </NavigationContainer>
    );
  }
}


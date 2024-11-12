import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import uuid from 'react-native-uuid';
import { colors } from '../theme';
import type { AddCityProps, AddCityState, CityType } from '../types';

class AddCity extends React.Component<AddCityProps, AddCityState> {
  state: AddCityState = {
    city: '',
    country: ''
  }
  onChangeText = (key: any, value: any) => {
    this.setState({ [key]: value } as Pick<AddCityState, keyof AddCityState>);
  }
  submit = () => {
    if (this.state.city === '' || this.state.country === '') {
      Alert.alert('please complete form');
      return;
    }
    const city: CityType = {
      city: this.state.city,
      country: this.state.country,
      id: uuid.v4() as string,
      locations: []
    }
    this.props.route.params.addCity(city);
    this.setState({
      city: '',
      country: ''
    }, () => {
      this.props.navigation.navigate('Cities');
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Cities</Text>
        <TextInput
          placeholder='City name'
          onChangeText={val => this.onChangeText('city', val)}
          style={styles.input}
          value={this.state.city}
        />
        <TextInput
          placeholder='Country name'
          onChangeText={val => this.onChangeText('country', val)}
          style={styles.input}
          value={this.state.country}
        />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add City</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center'
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50
  }
})


export default AddCity;

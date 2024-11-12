import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';

import CenterMessage from '../components/CenterMessage';

import { colors } from '../theme';

import type { CitiesProps, CityType } from '../types';

export default class Cities extends React.Component<CitiesProps> {
  static navigationOptions = {
    title: 'Cities',
    headerTitleStyles: {
      color: 'white',
      fontSize: 20,
      fontWeight: '400'
    }
  }

  navigate = (item: CityType) => {
    this.props.navigation.navigate('City', { city: item });
  }

  render() {
    const { cities } = this.props;
    const citiesArray = cities || [];
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={!citiesArray.length ? { flex: 1 } : {}}>
          <View style={[
            styles.cityContainer,
            !citiesArray.length && { flex: 1, justifyContent: 'center' }
          ]}>
            {
              !citiesArray.length && <CenterMessage message='No cities added!' />
            }
            {
              citiesArray.map((city: CityType, index: number) => (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => this.navigate(city)}>
                  <View style={styles.cityContainer}>
                    <Text style={styles.city}>{city.city}</Text>
                    <Text style={styles.country}>{city.country}</Text>
                  </View>
                </TouchableWithoutFeedback>
              ))
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cityContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
  },
  city: {
    fontSize: 20
  },
  country: {
    color: 'rgba(0, 0, 0, .5)'
  }
})

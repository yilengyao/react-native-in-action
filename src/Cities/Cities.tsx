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

interface CitiesProps {
  navigation: any;
  cities: CityType[];
}

export default class Cities extends React.Component<CitiesProps> {
  static navigationOptions = {
    title: 'Cities',
    headerTitleStyles: {
      color: 'white',
      fontSize: 20,
      fontWeight: '400'
    }
  }
  navigate = (item: any) => {
    this.props.navigation.navigate('City', { city: item });
  }
  render() {
    const { cities } = this.props;
    return (
      <ScrollView contentContainerStyle={[!cities.length && { flex: 1 }]}>
        <View style={[!cities.length &&
          { justifyContent: 'center', flex: 1 }]}>
          {
            !cities.length && <CenterMessage message='No saved cities!' />
          }
          {
            cities.map((item: any, index: number) => (
              <TouchableWithoutFeedback
                onPress={() => this.navigate(item)} key={index} >
                <Text style={styles.city}>{item.city}</Text>
                <Text style={styles.country}>{item.country}</Text>
              </TouchableWithoutFeedback>
            ))
          }
        </View>
      </ScrollView>
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

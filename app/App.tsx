import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <FontAwesomeIcon style={styles.cardImage} icon={faUser} size={50} color="black" />
          </View>
        </View>
      </View>
    )
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    borderColor: 'black',
    borderStyle: 'solid',
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    borderRadius: 20,
    borderWidth: 3,
  },
  cardImageContainer: {
    backgroundColor: 'white',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'black'
  },
  cardImage: {
    width: 80,
    height: 80,
    margin: 10
  }
});

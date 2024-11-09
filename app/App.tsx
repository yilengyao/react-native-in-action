import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import getStyleSheet from './styles';

interface AppState {
  darkTheme: boolean;
}

export default class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      darkTheme: false
    }
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState({ darkTheme: !this.state.darkTheme });
  };

  render() {

    const styles = getStyleSheet(this.state.darkTheme);
    /*
     * The React Native StyleSheet.flatten utility converts
     * the StyleSheet object into a JavaScript object, which
     * makes it easier to get he background color
     */
    const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor;
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Button title={backgroundColor} onPress={this.toggleTheme} />
        </View>
      </View>
    )
  }
}


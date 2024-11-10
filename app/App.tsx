import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Example>
            <CenteredText>
              A
            </CenteredText>
          </Example>
          <Example>
            <CenteredText>
              B
            </CenteredText>
            <View style={[styles.tinyExample,
            {
              position: 'absolute',
              right: 0,
              bottom: 0
            }]}>
              <CenteredText>
                E
              </CenteredText>
            </View>
          </Example>
          <Example>
            <CenteredText>
              C
            </CenteredText>
          </Example>
          <Example style={{
            position: 'absolute',
            right: 0, botton: 0
          }}>
            <CenteredText>
              D
            </CenteredText>
          </Example>
        </View>
      </View>
    )
  }
}

interface ExampleProps {
  style?: any
  children?: any
}

const Example = (props: ExampleProps) => (
  <View style={[styles.example, props.style]}>
    {props.children}
  </View>
)

interface CenteredTextProps {
  style?: any
  children?: any
}

const CenteredText = (props: CenteredTextProps) => (
  <Text style={[styles.centeredText, props.style]}>
    {props.children}
  </Text>
)

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    margin: 40,
    marginTop: 100,
    borderWidth: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  example: {
    width: 100,
    height: 100,
    backgroundColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center'
  },
  tinyExample: {
    width: 30,
    height: 30,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'lightgrey'
  },
  centeredText: {
    textAlign: 'center',
    margin: 10
  }
});

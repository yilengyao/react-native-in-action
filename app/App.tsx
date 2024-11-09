import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Example>
          <CenteredText>
            A
          </CenteredText>
        </Example>
        <Example style={{
          paddingTop: 50
        }}>
          <CenteredText>
            B
          </CenteredText>
        </Example>
        <Example style={{
          paddingTop: 50,
          paddingLeft: 10
        }}>
          <CenteredText>
            C
          </CenteredText>
        </Example>
        <Example style={{
          paddingLeft: -10,
          paddingTop: -10
        }}>
          <CenteredText>
            D
          </CenteredText>
        </Example>
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
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 75,
  },
  example: {
    width: 120,
    height: 120,
    marginLeft: 20,
    marginBottom: 20,
    backgroundColor: 'grey',
    borderWidth: 2,
    justifyContent: 'center'
  },
  centeredText: {
    textAlign: 'center',
    margin: 10
  }
});

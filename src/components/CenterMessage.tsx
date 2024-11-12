import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import { colors } from '../theme';
import type { CenterMessageProps } from '../types';

const CenterMessage: React.FC<CenterMessageProps> = ({ message }) => (
  <View style={styles.container}>
    <Text style={styles.message}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.primary
  },
  message: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primary
  }
});

export default CenterMessage;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: 'center',
  },
  text: {
    color: '#EDEFEE',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

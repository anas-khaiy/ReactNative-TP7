import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import LoginScreen from './LoginScreen';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <AppHeader />
        <LoginScreen />
      </View>
      <View style={styles.footerContainer}>
        <AppFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#333333',
  },
});

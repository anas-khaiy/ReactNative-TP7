import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppFooter() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>© 2025 All rights reserved</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333333',
        padding: 20,
        alignItems: 'center',
    },
    text: {
        color: '#EDEFEE',
        fontSize: 14,
    },
});

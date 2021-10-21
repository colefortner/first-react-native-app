import React from 'react';
import {Button, StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.helloText}>Hello</Text>
        <Text style={styles.helloText}>React</Text>
        <Text style={styles.helloText}>Jax</Text>
        <Text style={styles.helloText}>Jax</Text>
        <Text style={styles.helloText}>Jax</Text>
        <Text style={styles.helloText}>Jax</Text>
        <Text style={styles.helloText}>Jax</Text>
        <Text style={styles.helloText}>Jax</Text>
        <Button title="Press Me If You Can" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
  helloText: {
    color: 'red',
    fontSize: 85,
  },
});

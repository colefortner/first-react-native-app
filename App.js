import React, {useState} from 'react';
import {Button, StyleSheet, Text, SafeAreaView} from 'react-native';

const App = () => {
  // he says do not do navigation this way
  const [activeScreen, setActiveScreen] = useState('home');

  return (
    // home
    <SafeAreaView style={styles.container}>
      <Text style={styles.helloText}>🐶 Bark!</Text>
      {/* <Button title="Home" onPress={() => setActiveScreen('home')} /> */}
      <Button title="Add a Dog" onPress={() => setActiveScreen('add')} />
      <Button title="Show my Dogs" onPress={() => setActiveScreen('mybeers')} />
      {activeScreen === 'add' && <AddDog />}
      {activeScreen === 'mybeers' && <MyDogs />}
      {/* {activeScreen === 'home' && <App />} */}
    </SafeAreaView>
  );
};

const AddDog = () => {
  // add
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.helloText}>Add a 🐶</Text>
    </SafeAreaView>
  );
};

const MyDogs = () => {
  // mybeers
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.helloText}>My 🐶s</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // this makes it take up the entire screen
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helloText: {
    color: 'red',
    fontSize: 85,
  },
});

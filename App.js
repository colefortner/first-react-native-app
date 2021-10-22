import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    // home
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            if (route.name === 'Add Dog') {
              iconName = focused ? 'add-circle-sharp' : 'add-sharp';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            if (route.name === 'My Dogs') {
              iconName = focused ? 'paw' : 'paw-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add Dog" component={AddDogScreen} />
        <Tab.Screen name="My Dogs" component={MyDogsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.helloText}>Dog Pound </Text>
    </View>
  );
};

const AddDogScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.helloText}>Add a 🐶</Text>
    </View>
  );
};

const MyDogsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.helloText}>My 🐶s</Text>
    </View>
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

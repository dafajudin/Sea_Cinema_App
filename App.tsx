/**
  * Sea_Cinema App
  */


import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SignInScreen from './src/screen/SignInScreen/SignInScreen';
import HomeScreen from './src/screen/HomeScreen';

// const Stack = createNativeStackNavigator();

const App = () => {
  // return (
  //   <SafeAreaView style={styles.root}>
  //     <SignInScreen />
  //   </SafeAreaView>
  // );
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="TabNavigators"
          component={TabNavigators}
          options={{animation: 'default'}}
        />
        <Stack.Screen
          name="SatBookingScreens"
          component={SatBookingScreens}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="MovieDetailScreens"
          component={MovieDetailScreens}
          options={{animation: 'slide_from_bottom'}}
          />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;

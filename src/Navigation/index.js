import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from './src/screen/SignIn/SignInScreen';
import SignUpScreen from './src/screen/SignUp/SignUpScreen';
import ConfirmEmailScreen from './src/screen/ConfirmEmail/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screen/ForgotPassword/ForgotPasswordScreen';
import NewPasswordScreen from './src/screen/NewPassword/NewPasswordScreen';
import HomeScreen from '../screen/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}/>

        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
        <Stack.Screen name="NewPassword" component={NewPasswordScreen}/>

        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

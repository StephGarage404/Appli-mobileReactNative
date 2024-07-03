import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import GoogleSignIn from '../screens/auth/GoogleSignIn';
import RegisterScreen from '../screens/auth/sign-in';
import ProfileCompletionScreen from '../screens/auth/sign-up';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      {/* <Stack.Screen name="EnregistrementGoogle" component={GoogleSignIn} /> */}
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ProfileCompletion" component={ProfileCompletionScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;

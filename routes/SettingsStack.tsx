import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/Settings/SplashScreen';


const Stack = createStackNavigator();

function SettingsStack() {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen name="Settings" component={SettingsScreen} />
      {/* <Stack.Screen name="OtherSettings" component={OtherSettingsScreen} /> */}
    </Stack.Navigator>
  );
}

export default SettingsStack;
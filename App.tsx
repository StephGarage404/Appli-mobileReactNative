import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomeDrawer from './routes/HomeDrawer';
import AuthStack from './routes/AuthStack';
import React, { useState, useEffect } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import SettingsStack from './routes/SettingsStack';

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? (
        <HomeDrawer />
      ) : (
        <AuthStack />
      )}
      <SettingsStack />
    </NavigationContainer>
  );
}

export default App;
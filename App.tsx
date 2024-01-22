import * as React from 'react';
import { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/views/home/Home';

import * as Font from 'expo-font';
import { RegisterScreen } from './src/views/register/Register';

export type RootStackParamList = {
   Home: undefined,
   RegisterSreen: undefined,
}

async function loadFonts() {
    await Font.loadAsync({
      'a': require('./assets/font/Montserrat.ttf'),
    });
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
    useEffect(() => {
        const loadApp = async () => {
          await loadFonts();
          setFontLoaded(true);
        };
    
        loadApp();
      }, []);
    
      if (!fontLoaded) {
        return;
      }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="RegisterSreen"
          component={RegisterScreen}
          options={{
            headerShown: true,
            title: 'Nuevo usuario'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
import * as React from 'react';
import { Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screens/screen_1';
import Screen2 from './screens/screen2';
const Stack = createNativeStackNavigator();
function App() {

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Screen1" component={Screen1}></Stack.Screen>
        <Stack.Screen name="Screen2" component={Screen2}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
};
export default App;

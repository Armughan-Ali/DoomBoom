import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Appdisplay from './Component/Appdisplay';
import StartNav from './Component/StartNav';
import Screen2 from './Component/Screen2';
import Home from './Component/Home';
import Car from './Component/Car';
import Bike from './Component/Bike';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="mainDisp" component={Appdisplay}
      options= {{headerShown: false}}/>
      <Stack.Screen name="Onboard" component={StartNav}
      options= {{headerShown: false}} />
      <Stack.Screen name="screen2" component={Screen2}
      options= {{headerShown: false}} />
      
    </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
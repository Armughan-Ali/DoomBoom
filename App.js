import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Appdisplay from './Component/Appdisplay';
import StartNav from './Component/StartNav';
import Screen2 from './Component/Screen2';
import Car from './Component/Car';
import Bike from './Component/Bike';
import Home from './Component/Home';
import CarProduct1 from './Component/CarProduct1';
import CarProduct2 from './Component/CarProduct2';
import CarProduct3 from './Component/CarProduct3';
import CarProduct4 from './Component/CarProduct4';

import BikeProduct1 from './Component/bikeproduct1';
import BikeProduct2 from './Component/bikeproduct2';
import BikeProduct3 from './Component/bikeproduct3';
import BikeProduct4 from './Component/bikeproduct4';
import BikeProduct5 from './Component/bikeproduct5';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen3 from './Component/Screen3';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="mainDisp" component={Appdisplay}
      options= {{headerShown: false}}/>
      <Stack.Screen name="Onboard" component={StartNav}
      options= {{headerShown: false}} />
      <Stack.Screen name="screen2" component={Screen2}
      options= {{headerShown: false}} />
      <Stack.Screen name="screen3" component={Screen3}
      options= {{headerShown: false}} />
      <Stack.Screen name="Home" component={Home}
      options= {{headerShown: false}} />
      <Stack.Screen name="Car" component={Car}
      options= {{headerShown: false}} />
      <Stack.Screen name="Bike" component={Bike}
      options= {{headerShown: false}} />
      <Stack.Screen name="carP1" component={CarProduct1}
      options= {{headerShown: false}} />
      <Stack.Screen name="carP2" component={CarProduct2}
      options= {{headerShown: false}} />
      <Stack.Screen name="carP3" component={CarProduct3}
      options= {{headerShown: false}} />
      <Stack.Screen name="carP4" component={CarProduct4}
      options= {{headerShown: false}} />
      <Stack.Screen name="bikeP1" component={BikeProduct1}
      options= {{headerShown: false}} />
      <Stack.Screen name="bikeP2" component={BikeProduct2}
      options= {{headerShown: false}} />
      <Stack.Screen name="bikeP3" component={BikeProduct3}
      options= {{headerShown: false}} />
      <Stack.Screen name="bikeP4" component={BikeProduct4}
      options= {{headerShown: false}} />
      <Stack.Screen name="bikeP5" component={BikeProduct5}
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
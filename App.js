import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Modal, PaperProvider, Portal } from 'react-native-paper';
import { BottomNavigation,Text,MD3LightTheme } from 'react-native-paper';
import * as React from 'react';
import MyComponent from './bottomNavigation';
import Todo from './todo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DarkTheme as PaperDarkTheme,DefaultTheme  } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './description';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    
   <SafeAreaProvider style={{height:"100%",width:"100vw",backgroundColor:"black"}}>
    <PaperProvider >
    <Stack.Navigator>
        <Stack.Screen  name="Home2" component={Todo} options={{headerShown:false}}/>
        <Stack.Screen  name="Details" component={DetailsScreen} />
    </Stack.Navigator>
     {/* <MyComponent /> */}
    </PaperProvider>
      </SafeAreaProvider> 
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


// darkTheme.js




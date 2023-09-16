import { StyleSheet, Text, View } from 'react-native';
import Starter from './screens/Starter';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from './StackNavigator';
import { AppRegistry } from 'react-native';

AppRegistry.registerComponent("react-native-client", () => App);

// import { registerRootComponent } from 'expo';




export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StackNavigator />
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


// registerRootComponent(App);

import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react';
import BottomTabNavigator from './src/components/BottomTabNavigator';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              gestureEnabled: false,
              headerShown: false
            }}
          >
            <Stack.Screen component={BottomTabNavigator} name="Root" />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;

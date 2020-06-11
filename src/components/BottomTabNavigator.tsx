import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import { Home, Discover, Inbox, User } from '../screens'
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        style: {
          position: 'absolute',
          backgroundColor: 'rgba(0,0,0,0.2)',
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image style={{ flex: 1, resizeMode: 'contain' }} source={require('../assets/home_light.png')} />
          )
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image style={{ flex: 1, resizeMode: 'contain' }} source={require('../assets/search_light.png')} />
          )
        }}
      />
      <Tab.Screen
        name="Add"
        component={Home}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Image source={require('../assets/home_dark.png')} />
          )
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={require('../assets/home_dark.png')} />
          )
        }}
      />
      <Tab.Screen
        name="Me"
        component={User}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={require('../assets/home_dark.png')} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;


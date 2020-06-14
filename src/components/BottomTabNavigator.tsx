import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Discover, Inbox, User } from '../screens';
import { Image, StyleSheet } from 'react-native';
import BottomTabIcon from './BottomTabIcon';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'rgb(255,255,255)',
        inactiveTintColor: 'rgb(255,255,255)',
        style: styles.tabBar
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomTabIcon
              isFocus={focused}
              image={require('../assets/home_light.png')}
            />
          )
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomTabIcon
              isFocus={focused}
              image={require('../assets/search_light.png')}
            />
          )
        }}
      />
      <Tab.Screen
        name="Add"
        component={Home}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <BottomTabIcon
              isFocus={focused}
              isNonLabel={true}
              image={require('../assets/add_light.png')}
            />
          )
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomTabIcon
              isFocus={focused}
              image={require('../assets/inbox_light.png')}
            />
          )
        }}
      />
      <Tab.Screen
        name="Me"
        component={User}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomTabIcon
              isFocus={focused}
              image={require('../assets/user_light.png')}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderTopWidth:0
  }
});

export default BottomTabNavigator;

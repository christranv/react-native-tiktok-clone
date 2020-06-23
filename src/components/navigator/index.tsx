import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Discover, Inbox, User } from '../../screens';
import TabIcon from './TabIcon';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'rgb(255,255,255)',
        inactiveTintColor: 'rgb(255,255,255)',
        style: styles.tabBar,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              isFocus={focused}
              image={require('../../assets/icons/home_light.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              isFocus={focused}
              image={require('../../assets/icons/search_light.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Home}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              isFocus={focused}
              isNonLabel={true}
              image={require('../../assets/icons/add_light.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              isFocus={focused}
              image={require('../../assets/icons/inbox_light.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={User}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              isFocus={focused}
              image={require('../../assets/icons/user_light.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 0,
  },
});

export default Navigator;

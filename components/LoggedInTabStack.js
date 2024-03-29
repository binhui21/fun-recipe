import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecipeStack from './RecipeStack';
import AccountStack from '../components/AccountStack';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

export default function LoggedInStack() {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Recipe') {
            iconName = "comments"
          } else if (route.name === 'Settings') {
            iconName = "cog"
          }
          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#4169e1',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: "white",
        }
      }}>
        <Tab.Screen name="Recipe" component={RecipeStack} />
        <Tab.Screen name="Settings" component={AccountStack} />
      </Tab.Navigator>
  )
}
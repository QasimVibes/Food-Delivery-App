import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from './useNavigation';
import {AUTH_ROUTES, GUEST_ROUTES} from '../constants/NavigationRoutes';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const currentUser = useNavigation();
  const routes = currentUser ? AUTH_ROUTES : GUEST_ROUTES;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      {routes?.map(route => (
        <Stack.Screen
          key={route?.name}
          name={route?.name}
          component={route?.component}
        />
      ))}
    </Stack.Navigator>
  );
}

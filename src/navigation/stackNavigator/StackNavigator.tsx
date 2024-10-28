import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '../useNavigation';
import {GUEST_ROUTES} from '../../constants/NavigationRoutes';
import {DrawerNavigator} from '../drawerNavigator/DrawerNavigator';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  const currentUser = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      {currentUser ? (
        <Stack.Screen name="MainApp" component={DrawerNavigator} />
      ) : (
        GUEST_ROUTES?.map(route => (
          <Stack.Screen
            key={route?.name}
            name={route?.name}
            component={route?.component}
          />
        ))
      )}
    </Stack.Navigator>
  );
}

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawerContent} from './CustomDrawerContent';
import {COLORS} from '../../constants/Colors';
import {BottomTabNavigator} from '../bottomTabNavigator/BottomTabNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerPosition: 'right',
        drawerStyle: {
          backgroundColor: COLORS.orangeBase,
          width: 310,
          borderTopLeftRadius: 60,
          borderBottomLeftRadius: 60,
        },
      }}>
      <Drawer.Screen name="HomeTabs" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

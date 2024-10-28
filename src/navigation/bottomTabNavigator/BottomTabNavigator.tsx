import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {TAB_FIELDS} from '../../constants/NavigationRoutes';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 61,
          borderTopWidth: 0,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: COLORS.orangeBase,
        },
      }}>
      {TAB_FIELDS.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: () => (
              <Image
                source={tab.icon}
                style={tab.iconStyle}
                resizeMode="contain"
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

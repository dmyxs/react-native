import React, { useEffect } from 'react';
import {
  RouteProp,
  NavigationState,
  useNavigationState,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeTabs } from './HomeTabs';
import { DrawerTabs } from './DrawerTabs';
import { Account } from '@/pages/Account';
import { Found } from '@/pages/Fount';
import { Listen } from '@/pages/Listen';
import { RootStackNavigation, RootStackParams } from './index';

export type BottomTabProps = {
  HomeTabs: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};

interface IProps {
  navigation: RootStackNavigation;
  route: RouteProp<RootStackParams, 'BottomTabs'>;
}

// const getHeaderTitle = (state: NavigationState) => {
//   const routes = state?.routes || [];
//   const routeName = routes[state?.index || 0];

//   switch (routeName?.name) {
//     case 'HomeTabs':
//       return '首页';
//     case 'Listen':
//       return '我听';
//     case 'Found':
//       return '发现';
//     case 'Account':
//       return '账号';
//     default:
//       return '首页';
//   }
// };

const Tab = createBottomTabNavigator<BottomTabProps>();

export const BottomTabs: React.FC<IProps> = ({ navigation }) => {
  // const routeState = useNavigationState(state => state.routes[0].state);

  // useEffect(() => {
  //   navigation.setOptions({
  //     title: getHeaderTitle(routeState),
  //   });
  // }, [navigation, routeState]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#f86442',
      }}>
      <Tab.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{ tabBarLabel: '首页' }}
      />
      <Tab.Screen
        name="Listen"
        component={Listen}
        options={{ tabBarLabel: '我听' }}
      />
      <Tab.Screen
        name="Found"
        component={Found}
        options={{ tabBarLabel: '发现' }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{ tabBarLabel: '账户' }}
      />
    </Tab.Navigator>
  );
};

import React, { useEffect } from 'react';
import {
  RouteProp,
  TabNavigationState,
  useNavigationState,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '@/pages/Home';
import { Found } from '@/pages/Fount';
import { Account } from '@/pages/Account';
import { Listen } from '@/pages/Listen';
import { RootStackNavigation, RootStackParams } from './index';

export type BottomTabProps = {
  Home: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};

type RouteType = RouteProp<RootStackParams, 'BottomTbas'> & {
  state?: TabNavigationState<BottomTabProps>;
};

interface IProps {
  navigation: RootStackNavigation;
  route: RouteType;
}

// const getHeaderTitle = (route: RouteType) => {
//   console.log(route);

//   // const routeName = route.state
//   //   ? route.state.routes[route.state.index].name
//   //   : route.params?.screen || 'Home';

//   // switch (routeName) {
//   //   case 'Home':
//   //     return '首页';
//   //   case 'Listen':
//   //     return '我听';
//   //   case 'Found':
//   //     return '发现';
//   //   case 'Account':
//   //     return '账号';
//   //   default:
//   //     return '首页';
//   // }

//   return 'hello';
// };

const Tab = createBottomTabNavigator<BottomTabProps>();
export const BottomTbas: React.FC<IProps> = ({ navigation, route }) => {
  const routeState = useNavigationState(state => state).routes[0].state;
  const index = routeState?.index || 0;
  useEffect(() => {
    navigation.setOptions({
      title: routeState?.routes[index].name,
    });
  }, [index, navigation, route, routeState?.routes]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#f86442',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Listen" component={Listen} />
      <Tab.Screen name="Found" component={Found} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

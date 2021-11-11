import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { Home } from '@/pages/Home';
import { Detail } from '@/pages/Detail';

export type RootStackParams = {
  Home: undefined;
  Detail: {
    id: number;
  };
};

export type RootStackNavigation = NativeStackNavigationProp<RootStackParams>;
const Stack = createNativeStackNavigator<RootStackParams>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: '首页' }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ title: '详情页' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

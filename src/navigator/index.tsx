import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { BottomTabs } from './BottomTabs';
import { Detail } from '@/pages/Detail';

// 指定路由和路由参数
export type RootStackParams = {
  BottomTabs: {
    screen?: string;
  };
  Detail: {
    id: number;
  };
};

export type RootStackNavigation = NativeStackNavigationProp<RootStackParams>;

const Stack = createNativeStackNavigator<RootStackParams>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true, //导航头是否可见，默认true可见
          headerTitleAlign: 'center', //导航头标题显示位置，默认left
          gestureEnabled: true,
          animation: 'slide_from_right', //当按下或弹出时，屏幕应该如何动画，slide_from_right左出右进
          presentation: 'card', //屏幕的呈现方式
          // statusBarHidden: true,   //是否显示顶部状态栏
        }}>
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{ title: '首页' }}
        />
        <Stack.Screen name="Detail">
          {props => <Detail {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

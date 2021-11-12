import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Home } from '@/pages/Home';

const Top = createMaterialTopTabNavigator();
export const HomeTabs = () => {
  return (
    <Top.Navigator
      screenOptions={{
        lazy: true, //屏幕懒加载
        swipeEnabled: true, //可以左右滑动屏幕来选择标签
        tabBarScrollEnabled: true, //标签大于屏幕时可以左右滚动
        //每个item的样式
        tabBarItemStyle: {
          width: 80,
        },
        //item的下划线样式
        tabBarIndicatorStyle: {
          height: 3,
          width: 20,
          marginLeft: 30,
          borderRadius: 3,
          backgroundColor: '#f86442',
        },
        tabBarActiveTintColor: '#f86442', //选中的字体颜色
        tabBarInactiveTintColor: '#333', //未选中的字体颜色
      }}>
      <Top.Screen name="HOME" component={Home} options={{ title: '推荐' }} />
      <Top.Screen name="HOME1" component={Home} />
      <Top.Screen name="HOME2" component={Home} />
      <Top.Screen name="HOME3" component={Home} />
      <Top.Screen name="HOME4" component={Home} />
      <Top.Screen name="HOME5" component={Home} />
      <Top.Screen name="HOME6" component={Home} />
    </Top.Navigator>
  );
};

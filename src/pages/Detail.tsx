import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParams } from '@/navigator/index';

interface IProps {
  route: RouteProp<RootStackParams, 'Detail'>; //路由参数，第一个参数是类型，第二个参数是页面
}

export const Detail = ({ route }: IProps) => {
  return (
    <View>
      <Text>Detail</Text>
      <Text>Home, {route.params?.id}</Text>
    </View>
  );
};

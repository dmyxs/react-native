import React from 'react';
import { View, Text, Button } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackNavigation } from '@/navigator/index';

// 导航器会传递两个对象：
// navigation：用于导航跳转，传递参数
// route：用于接收参数
interface IProps {
  navigation: RootStackNavigation; //路由对象
}

export const Home = ({ navigation }: IProps) => {
  const onPress = () => {
    navigation.navigate('Detail', {
      id: 100,
    });
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title="跳转到详情" onPress={onPress} />
    </View>
  );
};

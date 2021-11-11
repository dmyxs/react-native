import React from 'react';
import { View, Text, Button } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackNavigation, RootStackParams } from '@/navigator/index';

interface IProps {
  //导航器会传递两个参数
  navigation: RootStackNavigation; //接收路由对象
  route: RouteProp<RootStackParams, 'Home'>; //路由参数
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

import React from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackNavigation } from '@/navigator/index';

interface IProps {
  navigation: RootStackNavigation;
}

export const Account = ({ navigation }: IProps) => {
  const onPress = () => {
    navigation.navigate('Detail', {
      id: 100,
    });
  };

  return (
    <View>
      <Text>Account</Text>
      <Button title="跳转到详情" onPress={onPress} />
    </View>
  );
};

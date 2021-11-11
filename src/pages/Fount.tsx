import React from 'react';
import { View, Text, Button } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackNavigation, RootStackParams } from '@/navigator/index';

interface IProps {
  navigation: RootStackNavigation;
}

export const Found = ({ navigation }: IProps) => {
  const onPress = () => {
    navigation.navigate('Detail', {
      id: 100,
    });
  };

  return (
    <View>
      <Text>Found</Text>
      <Button title="跳转到详情" onPress={onPress} />
    </View>
  );
};

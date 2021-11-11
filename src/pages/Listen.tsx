import React from 'react';
import { View, Text, Button } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackNavigation, RootStackParams } from '@/navigator/index';

interface IProps {
  navigation: RootStackNavigation;
}

export const Listen = ({ navigation }: IProps) => {
  return (
    <View>
      <Text>Listen</Text>
    </View>
  );
};

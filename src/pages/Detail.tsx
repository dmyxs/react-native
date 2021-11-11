import React from 'react';
import { View, Text, Button } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackNavigation, RootStackParams } from '@/navigator/index';

interface IProps {
  navigation: RootStackNavigation;
  route: RouteProp<RootStackParams, 'Detail'>;
}

export const Detail = ({ route, navigation }: IProps) => {
  return (
    <View>
      <Text>Detail</Text>
      <Text>Home, {route.params.id}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Detail', {
            id: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('BottomTbas')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

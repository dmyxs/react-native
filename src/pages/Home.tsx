import React, { useEffect, useState, memo } from 'react';
import { View, Text, Button, ActivityIndicator, FlatList } from 'react-native';
import { RootStackNavigation } from '@/navigator/index';
import { useAppDispatch, useAppSelector } from '@/models/index';
import {
  decrement,
  increment,
  selectCount,
  incrementAsync,
} from '@/models/home.slice';
import { useHttpHook } from '@/request/use-http';
// import { request } from '@/request/request';
// import axios from 'axios';

interface IProps {
  navigation: RootStackNavigation;
}

type obj = {
  title: string;
  description: string;
  movies: {
    id: string;
    title: string;
    releaseYear: string;
  }[];
};

export const Home = memo(({ navigation }: IProps) => {
  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState<obj[]>([]);
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const { result, loading } = useHttpHook<obj>({
    url: 'https://reactnative.dev/movies.json',
    watch: [count],
  });

  const onPress = () => {
    navigation.navigate('Detail', {
      id: 100,
    });
  };

  // const handelRequest = () => {
  //   setLoading(true);
  //   request({ url: 'https://reactnative.dev/movies.json' }).then(res => {
  //     console.log('页面获取数据：', res);
  //     setData(res.movies);
  //   });

  //   // setLoading(true);
  //   // axios({ url: 'https://reactnative.dev/movies.json' })
  //   //   .then(res => {
  //   //     console.log(res);
  //   //     setData(res.data);
  //   //   })
  //   //   .catch(e => {
  //   //     console.log(e);
  //   //   });

  //   // fetch('https://reactnative.dev/movies.json')
  //   //   .then(response => response.json())
  //   //   .then(responseJson => {
  //   //     console.log(responseJson);
  //   //   })
  //   //   .catch(error => {
  //   //     console.error(error);
  //   //   });

  //   setLoading(false);
  // };

  // useEffect(() => {
  //   console.log(result);
  // }, [count, result]);

  return (
    <View>
      <Text>Home</Text>
      <Text>{count}</Text>
      <Button title="---" onPress={() => dispatch(decrement())} />
      <Button title={'+++'} onPress={() => dispatch(increment())} />
      <Button title="异步" onPress={() => dispatch(incrementAsync())} />
      {/* <Button title="发送请求" onPress={handelRequest} /> */}
      <Button title="跳转到详情" onPress={onPress} />

      <View>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={result?.movies}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <Text>
                {item.title}, {item.releaseYear}
              </Text>
            )}
          />
        )}
      </View>
    </View>
  );
});

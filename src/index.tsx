import React from 'react';

import Navigator from '@/navigator/index';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <>
      <Navigator />
      {/* 顶部状态栏设置 */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
    </>
  );
};

export default App;

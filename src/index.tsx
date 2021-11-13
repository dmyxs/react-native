import React, { memo } from 'react';

import Navigator from '@/navigator/index';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '@/models/index';

const App = memo(() => {
  return (
    <Provider store={store}>
      <Navigator />
      {/* 顶部状态栏设置 */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
    </Provider>
  );
});

export default App;

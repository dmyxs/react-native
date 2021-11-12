import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Account } from '@/pages/Account';
import { Setting } from '@/pages/Setting';

const Drawer = createDrawerNavigator();
export const DrawerTabs = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
};

import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes, headers} from '../../services';
import * as App from '../../screens/app';
import BottomTab from './bottomTab';
const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <AppStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routes.home}>
      <AppStack.Screen name={routes.bottomTab} component={BottomTab} />
      {/* <AppStack.Screen name={routes.editProfile} component={App.EditProfile} /> */}
      <AppStack.Screen
        name={routes.Menu}
        component={App.Menu}
        options={{presentation: 'transparentModal'}}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigation;

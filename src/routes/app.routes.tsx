import React from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Home} from '../views/screens/home/view';
import {Edit} from '../views/screens/edit/view';
import {HeaderRightButton} from '../views/components/header-right-button/view';

type AppRoutes = {
  home: undefined;
  edit: undefined | {key: number};
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const {Navigator, Screen} = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#222',
        },
        headerTintColor: '#fafaf9',
      }}>
      <Screen
        name="home"
        component={Home}
        options={{
          headerTitle: 'Your Notes',
          headerRight: HeaderRightButton,
        }}
      />

      <Screen name="edit" component={Edit} />
    </Navigator>
  );
}

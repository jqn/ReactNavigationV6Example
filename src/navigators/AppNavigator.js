import React, {useState, useEffect} from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Loading from '../screens/Loading';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';

const styles = StyleSheet.create({});

const AuthStack = createNativeStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

const AppTabs = createBottomTabNavigator();

export const AppTabsScreen = () => {
  return (
    <AppTabs.Navigator>
      <AppTabs.Screen name="Home" component={Home} />
    </AppTabs.Navigator>
  );
};

export const AppNavigator = () => {
  const colorScheme = useColorScheme();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
      // setUser({});
    }, 500);
  }, []);

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {isLoading ? <Loading /> : user ? <AppTabsScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

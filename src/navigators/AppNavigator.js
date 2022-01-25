import React, {useState, useEffect} from 'react';
import {useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {withStore} from '../context/AppContext';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Loading from '../screens/Loading';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Menu from '../screens/Menu';
import Dashboard from '../screens/Dashboard';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';

const AuthStack = createNativeStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <AuthStack.Group
        screenOptions={{
          presentation: 'transparentModal',
          cardOverlayEnabled: true,
        }}>
        <AuthStack.Screen
          name="SignIn"
          component={SignIn}
          options={({navigation}) => ({
            headerRight: () => (
              <Icon
                onPress={() => navigation.goBack()}
                name="remove"
                color="#000"
                size={30}
              />
            ),
          })}
        />
        <AuthStack.Screen
          name="SignUp"
          component={SignUp}
          options={({navigation}) => ({
            headerRight: () => (
              <Icon
                onPress={() => navigation.goBack()}
                name="remove"
                color="#000"
                size={30}
              />
            ),
          })}
        />
      </AuthStack.Group>
    </AuthStack.Navigator>
  );
};

const AppTabs = createBottomTabNavigator();

const AppTabsScreen = ({store}) => {
  return (
    <AppTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#666666',
        tabBarStyle: {backgroundColor: '#333333'},
      }}>
      <AppTabs.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon name="home" color={color} size={size} />;
          },
        }}
      />
      {store.permissions.profile && (
        <AppTabs.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Icon name="smile-o" color={color} size={size} />;
            },
          }}
        />
      )}
      {store.permissions.settings && (
        <AppTabs.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Icon name="cog" color={color} size={size} />;
            },
          }}
        />
      )}
    </AppTabs.Navigator>
  );
};

const AppStack = createNativeStackNavigator();

const AppStackScreen = ({permissions}) => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Menu" component={Menu} />
      <AppStack.Screen
        name="Apptabs"
        options={{headerShown: false}}
        component={withStore(AppTabsScreen)}
      />
    </AppStack.Navigator>
  );
};

const AppNavigator = ({store}) => {
  const colorScheme = useColorScheme();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    setTimeout(() => {
      if (store.loggedIn) {
        setUser({});
        setIsLoading(false);
      } else {
        setUser(null);
        setIsLoading(false);
      }
    }, 2000);
  }, [store]);

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {isLoading ? (
        <Loading />
      ) : user ? (
        <AppStackScreen permissions={store.permissions} />
      ) : (
        <AuthStackScreen />
      )}
    </NavigationContainer>
  );
};

export default withStore(AppNavigator);

import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home/Home';
import AppStyles from './config/AppStyles';
import IconUser from './assets/icons/IconUser.svg';
import IconHome from './assets/icons/IconHome.svg';
import IconWallet from './assets/icons/IconWallet.svg';
import IconSetting from './assets/icons/IconSetting.svg';

function SettingScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SettingScreen</Text>
    </View>
  );
}

function AccountScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>AccountScreen</Text>
    </View>
  );
}

function WalletScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>WalletScreen</Text>
    </View>
  );
}

const TabView = () => {
  return (
    <View style={{flex: 1, backgroundColor: AppStyles.color(1).black}}>
      <StatusBar
        animated={true}
        backgroundColor={AppStyles.color(1).black}
        barStyle="light-content"
      />

      <BottomTabs />
    </View>
  );
};

export default TabView;

const BottomTabs = ({}) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size, focused}) => {
          let iconComponent;

          switch (route.name) {
            case 'User':
              iconComponent = (
                <IconUser
                  width={20}
                  height={20}
                  fill={focused ? AppStyles.color(1).skyblue : '#fff'}
                  size={size}
                />
              );
              break;
            case 'Home':
              iconComponent = (
                <IconHome
                  width={20}
                  height={20}
                  fill={focused ? AppStyles.color(1).skyblue : '#fff'}
                  size={size}
                />
              );
              break;

            case 'Wallet':
              iconComponent = (
                <IconWallet
                  width={24}
                  height={24}
                  fill={focused ? AppStyles.color(1).skyblue : '#fff'}
                  size={size}
                />
              );
              break;

            case 'Setting':
              iconComponent = (
                <IconSetting
                  width={24}
                  height={24}
                  fill={focused ? AppStyles.color(1).skyblue : '#fff'}
                  size={size}
                />
              );
              break;

            default:
              iconComponent = (
                <IconHome
                  width={20}
                  height={20}
                  fill={focused ? AppStyles.color(1).skyblue : 'white'}
                  size={size}
                />
              );
              break;
          }

          return <View style={{width: 24, height: 24}}>{iconComponent}</View>;
        },
        tabBarActiveTintColor: AppStyles.color(1).skyblue,
        tabBarInactiveTintColor: AppStyles.color(0.9).white,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingHorizontal: 30,
          width: '100%',
          backgroundColor: AppStyles.color(1).black,
          borderTopWidth: 0,
        },
      })}>
      <Tab.Screen name="User" component={AccountScreen} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

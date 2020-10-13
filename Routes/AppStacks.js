import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SplashScreen from '../src/screen/Splashscreen';
import GetStarted from '../src/screen/getStarted';
import Login from '../src/screen/Login';
import Register from '../src/screen/Register';
import Home from '../src/screen/Home';
import DrawerContent from '../src/screen/drawerContets';
import Screen1 from '../src/screen/screen1';
import Screen2 from '../src/screen/screen2';
import Screen3 from '../src/screen/screen3';
import Screen4 from '../src/screen/screen4';

const TabTop = createMaterialTopTabNavigator();
const TabBot = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const TopTab = () => {
  return (
    <TabTop.Navigator>
      <TabTop.Screen name="Screen2" component={Screen2} />
      <TabTop.Screen name="Screen3" component={Screen3} />
      <TabTop.Screen name="Screen4" component={Screen4} />
    </TabTop.Navigator>
  );
};

const BottomTab = () => {
  return (
    <TabBot.Navigator>
      <TabBot.Screen name="Home" component={Home} />
      <TabBot.Screen name="Screen1" component={Screen1} />
      {/* <TabBot.Screen name="TopTab" component={TopTab} /> */}
    </TabBot.Navigator>
  );
};

const RootDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Home" component={BottomTab} />
    </Drawer.Navigator>
  );
};

class AppStacks extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RootDrawer"
            component={RootDrawer}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Screen2"
            component={TopTab}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppStacks;

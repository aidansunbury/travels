import * as React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Feed from "../pages/Feed";
import NewPost from "../pages/NewPost";
import Profile from "../pages/Profile";
import Search from "../pages/Search";

import Login from "../pages/Login";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tab"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: () => <Icon name="list" size={20} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => <Icon name="search" size={20} />,
        }}
      />
      <Tab.Screen
        name="NewPost"
        component={NewPost}
        options={{
          tabBarIcon: () => <Icon name="add" size={20} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <Icon name="face" size={20} />,
        }}
      />
    </Tab.Navigator>
  );
}

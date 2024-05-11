import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'black' }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarActiveTintColor: "#FF7315",
          tabBarInactiveTintColor: "#3A3535",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#232020",
            borderTopWidth: 1,
            borderTopColor: "#3A3535",
            height: 65,
          },
          title: 'Home',
          headerShown:false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="edit"
        options={{
          tabBarActiveTintColor: "#FF7315",
          tabBarInactiveTintColor: "#3A3535",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#232020",
            borderTopWidth: 1,
            borderTopColor: "#3A3535",
            height: 65,
          },
          title: 'Edit',
          headerShown:false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="edit" color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarActiveTintColor: "#FF7315",
          tabBarInactiveTintColor: "#3A3535",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#232020",
            borderTopWidth: 1,
            borderTopColor: "#3A3535",
            height: 65,
          },
          title: 'Cart',
          headerShown:false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="shopping-cart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="hamburger"
        options={{
          tabBarActiveTintColor: "#FF7315",
          tabBarInactiveTintColor: "#3A3535",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#232020",
            borderTopWidth: 1,
            borderTopColor: "#3A3535",
            height: 65,
          },
          title: 'Menu',
          headerShown:false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="list" color={color} />,
        }}
      />
    </Tabs>
  );
}

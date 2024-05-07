import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'purple' }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown:false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="edit"
        options={{
          title: 'edit',
          headerShown:false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="edit" color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'cart',
          headerShown:false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="shopping-cart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="hamburger"
        options={{
          title: 'user',
          headerShown:false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="list" color={color} />,
        }}
      />
    </Tabs>
  );
}

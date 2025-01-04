import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { Tabs } from "expo-router";
import TabBar from "@/hooks/TabBar";
import Entypo from "@expo/vector-icons/Entypo";

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "light",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="Beranda"
        options={{
          title: "Beranda",
          tabBarIcon: ({ color, focused }) => (
            <Entypo name="home" size={focused ? 28 : 24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Monitor"
        options={{
          title: "Monitoring",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name="chart-area"
              size={focused ? 28 : 24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Diskusi"
        options={{
          title: "Diskusi",
          tabBarIcon: ({ color, focused }) => (
            <Entypo name="chat" size={focused ? 28 : 24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Akun"
        options={{
          title: "Akun",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name="user-alt"
              size={focused ? 28 : 24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

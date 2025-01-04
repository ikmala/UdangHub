import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import TabBarButton from "./TabBarButton";
import { icon } from "./icon";
import { LinearGradient } from "expo-linear-gradient";

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View>
      <LinearGradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        start={[0, 0]}
        end={[1, 1]}
      >
        <View style={styles.tabbar}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              typeof options.tabBarLabel === "string"
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;
            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };

            const routeName = route.name as keyof typeof icon;

            return (
              routeName in icon && (
                <TabBarButton
                  key={route.key}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  isFocused={isFocused}
                  routeName={routeName}
                  color={isFocused ? "#12539B" : "gray"}
                  label={label || ""}
                />
              )
            );
          })}
        </View>
      </LinearGradient>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 35,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
});

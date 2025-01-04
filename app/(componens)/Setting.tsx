import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Setting = () => {
  const router = useRouter();

  return (
    <ScrollView>
      <View className="flex-row items-center p-10 mt-5">
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-center font-poppinsBold text-primary text-2xl">
          Setting
        </Text>
      </View>
      <View className="p-5">
        <View className="flex-row justify-between items-center rounded-xl border-black border-2 p-5 mb-2">
          <Text className="text-primary text-2xl font-poppinsBold">LogOut</Text>
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity
              className="items-center bg-primary py-2 px-6 rounded-full"
              onPress={() => router.replace("/")}
            >
              <Text className="text-white">
                <Entypo name="login" size={24} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Setting;

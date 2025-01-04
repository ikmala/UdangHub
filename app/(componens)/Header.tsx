import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function Header() {
  const router = useRouter();

  return (
    <View className="flex-row justify-between items-center mt-20 p-5">
      <View>
        <Text className="text-primary font-poppinsMedium">Selamat Datang,</Text>
        <Text className="text-xl font-poppinsBold text-primary">
          Nama Pengguna
        </Text>
      </View>
      <View className="flex-row">
        <TouchableOpacity
          className="mx-4"
          onPress={() => router.push("/Notification")}
        >
          <Text className="text-primary">
            <Ionicons name="notifications-sharp" size={24} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="mx-2"
          onPress={() => router.push("/Setting")}
        >
          <Text className="text-primary">
            <Ionicons name="settings-sharp" size={24} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

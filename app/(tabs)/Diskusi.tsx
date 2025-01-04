import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Header from "../(componens)/Header";

const Diskusi = () => {
  const chat = () => {
    return (
      <View className="flex-row items-center mx-4 my-2">
        {/* Ekor Gelembung */}
        <View className="w-3 h-3 bg-[#005BAC] rounded-full -mr-1 rotate-45 shadow-md" />

        {/* Gelembung Utama */}
        <View className="bg-[#005BAC] rounded-2xl px-4 py-3 shadow-md max-w-[80%]">
          <Text className="text-white font-bold">
            Hai, Ada yang bisa kami bantu?
          </Text>
        </View>
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View className="flex-1 justify-between">
        {/* Membuat layout utama dengan justify-between */}
        {/* Header */}
        <View>
          {Header()}
          <View className="h-[1px] bg-gray-300 mx-5" />

          {/* Konten Scroll */}
          <ScrollView className="flex-1">{chat()}</ScrollView>
        </View>
        {/* TextInput di bagian bawah */}
        <View className="mb-20">
          <View className="h-[1px] bg-gray-300 mx-5" />
          <View className="flex-row items-center border bg-primary border-x-primary rounded-full m-5">
            <TextInput
              placeholder="Masukkan Pesan untuk diskusi dengan call center"
              className="flex-1 p-4 text-white pl-6 font-interMedium"
              placeholderTextColor="#ffffff"
            />
            <TouchableOpacity className="items-end justify-center pr-4">
              <Ionicons name="send-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Diskusi;

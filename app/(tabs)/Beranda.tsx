import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Image, ImageSourcePropType } from "react-native";
import Header from "../(componens)/Header";
import Svg, { Circle } from "react-native-svg";

const Beranda = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(" ");

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsDropdownVisible(false);
  };
  const dropdown = (numberkolam: any) => {
    return (
      <View className="relative">
        <TouchableOpacity
          className="flex-row items-center bg-white py-2 px-6 rounded-full shadow-lg shadow-black"
          onPress={toggleDropdown}
        >
          <Text className="text-primary text-base">{numberkolam}</Text>
          <Text className="text-primary text-sm ml-2">▼</Text>
        </TouchableOpacity>
        {/* Dropdown Options */}
        {isDropdownVisible && (
          <View className="absolute top-full mt-2 w-36 bg-white rounded-lg shadow-lg z-10">
            <TouchableOpacity onPress={() => selectOption("Kolam 1")}>
              <Text className="text-primary text-base py-2 px-4">
                {numberkolam}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  const pieCard = ({ name, value }: { name: string; value: number }) => {
    const strokeWidth = 10;
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const progress = (value / 200) * circumference;

    return (
      <View className="flex items-center justify-center p-2 relative">
        <Svg width={120} height={120}>
          {/* Lingkaran background */}
          <Circle
            cx="60"
            cy="60"
            r={radius}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={0}
            transform="rotate(90 60 60)"
          />
          {/* Lingkaran progres */}
          <Circle
            cx="60"
            cy="60"
            r={radius}
            stroke="white"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            transform="rotate(90 60 60)"
          />
        </Svg>
        {/* Teks Nilai */}
        <View className="absolute inset-0 flex items-center justify-center">
          <Text className="text-xl font-poppinsMedium text-white">{name}</Text>
          <Text className="text-4xl font-poppinsBold text-white">{value}°</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView className="bg-primary">
      {/* Header */}
      {Header()}

      {/* Monitoring Section */}
      <View className=" bg-hore rounded-3xl mx-3 p-5 border-white border">
        <View className="flex-row justify-between items-center ">
          {/* Sebelah kiri */}
          <View>
            <Text className="text-lg font-poppinsBold text-white">
              Monitoring
            </Text>
            <Text className="text-white font-poppinsMedium">
              Data selalu diperbarui
            </Text>
          </View>
          {/* Dropdown Button */}
          <View>{dropdown("kolam1")}</View>
        </View>

        {/* Mnotoring Realtime */}
        <ScrollView horizontal={true}>
          <View className="flex-row space-x-2">
            {pieCard({ name: "Suhu", value: 50 })}
            {pieCard({ name: "Suhu", value: 100 })}
            {pieCard({ name: "Suhu", value: 150 })}
            {pieCard({ name: "Suhu", value: 200 })}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Beranda;

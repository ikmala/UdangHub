import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Header from "../(componens)/Header";

const Monitor = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isDropdownVisibleB, setIsDropdownVisibleB] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Kolam 1");
  const [selectedOptionB, setSelectedOptionB] = useState("Bulan 1");

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const toggleDropdownB = () => {
    setIsDropdownVisibleB(!isDropdownVisibleB);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsDropdownVisible(false);
  };

  const selectOptionB = (option: string) => {
    setSelectedOptionB(option);
    setIsDropdownVisibleB(false);
  };

  const card = (name: string, value: string | number) => {
    return (
      <View
        className="bg-primary p-1 rounded-2xl mx-2 w-60 "
        style={{
          elevation: 8,
          shadowRadius: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -5 },
          shadowOpacity: 0.2,
        }}
      >
        <View
          className="bg-white p-5 rounded-xl w-full"
          style={{
            elevation: 8,
            shadowRadius: 8,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -5 },
            shadowOpacity: 0.2,
          }}
        >
          <Text className="text-4xl font-poppinsBold text-primary text-center">
            {value}
          </Text>
          <Text className="text-xl font-poppinsBold text-primary text-center">
            {name}
          </Text>
          <Text className="text-xl font-poppinsBold text-primary text-center">
            _____________
          </Text>
          <View className="flex-row justify-between">
            <View>
              <Text className="text-primary font-poppinsBold">Status</Text>
              <Text className="text-primary font-poppinsBold">
                Integrasi alat
              </Text>
            </View>
            <View>
              <Text className="text-primary font-poppinsBold text-right">
                Baik
              </Text>
              <Text className="text-primary font-poppinsBold text-right">
                Aman
              </Text>
            </View>
          </View>
          <TouchableOpacity className="bg-primary py-2 px-2 rounded-full mt-4">
            <Text className="text-white font-poppinsBold text-center">
              Rekap Data
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="text-white mt-2 font-poppinsMedium text-center">
          Alat telah Terintegrasi
        </Text>
      </View>
    );
  };

  return (
    <ScrollView>
      {/* Header */}
      {Header()}

      {/* Monitoring Section */}
      <View className="flex-row justify-between items-center  p-5">
        {/* Sebelah kiri */}
        <View>
          <Text className="text-lg font-poppinsBold text-primary">
            Monitoring
          </Text>
          <Text className="text-primary font-poppinsMedium">
            Data selalu diperbarui
          </Text>
        </View>
        {/* Dropdown Button */}
        <View className="relative">
          <TouchableOpacity
            className="flex-row items-center bg-primary py-2 px-6 rounded-full shadow-lg shadow-black"
            onPress={toggleDropdown}
          >
            <Text className="text-white text-base">{selectedOption}</Text>
            <Text className="text-white text-sm ml-2">▼</Text>
          </TouchableOpacity>
          {/* Dropdown Options */}
          {isDropdownVisible && (
            <View className="absolute top-full mt-2 w-36 bg-white rounded-lg shadow-lg z-10">
              <TouchableOpacity onPress={() => selectOption("Kolam 1")}>
                <Text className="text-primary text-base py-2 px-4">
                  Kolam 1
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => selectOption("Kolam 2")}>
                <Text className="text-primary text-base py-2 px-4">
                  Kolam 2
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => selectOption("Kolam 3")}>
                <Text className="text-primary text-base py-2 px-4">
                  Kolam 3
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {/* Mnotoring Realtime */}
      <ScrollView horizontal={true}>
        <View className="flex-row space-x-2 mb-4">
          {card("Suhu", "24°")}
          {card("pH", 7)}
          {card("Salinitas", "30 ppm")}
          {card("DO", "5 mg/L")}
        </View>
      </ScrollView>

      {/* Fitur2 */}
      <View className="px-5 pt-5">
        <Text className="text-lg font-poppinsBold text-primary">
          Kualitas Air
        </Text>
        <Text className="text-primary font-poppinsMedium">
          Grafik kalkulasi dari Rekap sensor
        </Text>
      </View>

      {/* Mnotoring Grafik */}
      <View className="flex-row justify-between items-center px-5 mb-20">
        {/* Sebelah kiri */}
        <Text className="text-lg font-poppinsBold text-primary">
          Filter Berdasarkan
        </Text>
        {/* Dropdown Button */}
        <View className="relative">
          <TouchableOpacity
            className="flex-row items-center bg-primary py-2 px-6 rounded-full shadow-lg shadow-black"
            onPress={toggleDropdownB}
          >
            <Text className="text-white text-base">{selectedOptionB}</Text>
            <Text className="text-white text-sm ml-2">▼</Text>
          </TouchableOpacity>
          {/* Dropdown Options */}
          {isDropdownVisible && (
            <View className="absolute top-full mt-2 w-36 bg-white rounded-lg shadow-lg z-10">
              <TouchableOpacity onPress={() => selectOptionB("Bulan 1")}>
                <Text className="text-primary text-base py-2 px-4">
                  Bulan 1
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => selectOptionB("Bulan 2")}>
                <Text className="text-primary text-base py-2 px-4">
                  Bulan 2
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => selectOptionB("Bulan 3")}>
                <Text className="text-primary text-base py-2 px-4">
                  Bulan 3
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {/* Grafik */}
    </ScrollView>
  );
};

export default Monitor;

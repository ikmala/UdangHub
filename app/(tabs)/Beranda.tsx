import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Image, ImageSourcePropType } from "react-native";
import Header from "../(componens)/Header";

const Beranda = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Kolam 1");

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsDropdownVisible(false);
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
          className="bg-white p-5 rounded-xl w-full items-center"
          style={{
            elevation: 8,
            shadowRadius: 8,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -5 },
            shadowOpacity: 0.2,
          }}
        >
          <Text className="text-xl font-poppinsBold text-primary">{name}</Text>
          <Text className="text-4xl font-poppinsBold text-primary">
            {value}
          </Text>
          <Text className="text-primary font-poppinsBold">Detektor Suhu</Text>
        </View>
        <Text className="text-white mt-2 font-poppinsMedium text-center">
          Alat telah Terintegrasi
        </Text>
      </View>
    );
  };

  const card2 = (
    name: string,
    deskripsi: string,
    link: ImageSourcePropType
  ) => {
    return (
      <View
        className="bg-primary p-1 rounded-2xl mx-2 w-50"
        style={{
          elevation: 8,
          shadowRadius: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -5 },
          shadowOpacity: 0.2,
        }}
      >
        <View
          className="bg-white p-5 rounded-full w-full items-center"
          style={{
            elevation: 8,
            shadowRadius: 8,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -5 },
            shadowOpacity: 0.2,
          }}
        >
          <Image source={link} className="w-24 h-24" />
        </View>
        <Text className="text-white font-poppinsBold text-center mt-3">
          {name}
        </Text>
        <Text className="text-white  font-poppinsMedium text-center mt-3 w-40">
          {deskripsi}
        </Text>
      </View>
    );
  };

  const card3 = (
    name: string,
    harga: string,
    deskripsi: string,
    link: ImageSourcePropType
  ) => {
    return (
      <View
        className="bg-primary p-1 rounded-2xl mx-2 w-48 mb-5 items-stretch"
        style={{
          elevation: 8,
          shadowRadius: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -5 },
          shadowOpacity: 0.2,
          height: 300,
        }}
      >
        <View
          className="bg-white items-center justify-center rounded-xl flex-1"
          style={{
            elevation: 8,
            shadowRadius: 8,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -5 },
            shadowOpacity: 0.2,
          }}
        >
          <TouchableOpacity>
            <Image source={link} className="w-52 h-52 mt-2" />
          </TouchableOpacity>
          <Text className="text-black font-poppinsBold text-center mt-1">
            {name}
          </Text>
          <Text className="text-black font-poppinsBold text-center mt-1">
            {harga}
          </Text>
          <Text className="text-primary font-poppinsMedium text-center mt-1 w-40 mb-2">
            {deskripsi}
          </Text>
        </View>
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

      {/* Menu */}
      <View className="flex-row justify-around items-center mt-10">
        <View className="items-center">
          <TouchableOpacity
            className="items-center bg-white p-1 rounded-xl h-28 w-28 "
            style={{
              elevation: 8,
              shadowRadius: 8,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: -5 },
              shadowOpacity: 0.2,
            }}
          >
            <View className="bg-[#D1DDEB] p-1 rounded-xl items-center justify-center">
              <Image
                source={require("@/assets/images/vektorAlat.png")}
                className="w-24 h-24 mb-0"
              />
            </View>
          </TouchableOpacity>
          <Text className=" font-poppinsBold text-primary text-center mt-2 w-28">
            Pembelian Alat Budidaya
          </Text>
        </View>
        <View className="items-center">
          <TouchableOpacity
            className="items-center bg-white p-1 rounded-xl h-28 w-28 "
            style={{
              elevation: 8,
              shadowRadius: 8,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: -5 },
              shadowOpacity: 0.2,
            }}
          >
            <View className="bg-[#D1DDEB] p-1 rounded-xl items-center justify-center">
              <Image
                source={require("@/assets/images/vektorKolam.png")}
                className="w-24 h-24 mb-0"
              />
            </View>
          </TouchableOpacity>
          <Text className=" font-poppinsBold text-primary text-center  mt-2 w-28">
            Monitoring Budidaya
          </Text>
        </View>
        <View className="items-center">
          <TouchableOpacity
            className="items-center bg-white p-1 rounded-xl h-28 w-28 "
            style={{
              elevation: 8,
              shadowRadius: 8,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: -5 },
              shadowOpacity: 0.2,
            }}
          >
            <View className="bg-[#D1DDEB] p-1 rounded-xl items-center justify-center">
              <Image
                source={require("@/assets/images/vektorTruk.png")}
                className="w-24 h-24 mb-0"
              />
            </View>
          </TouchableOpacity>
          <Text className=" font-poppinsBold text-primary text-center  mt-2 w-28">
            Pembelian Hasil Budidaya
          </Text>
        </View>
      </View>

      {/* Menu 2 */}
      <View className="mt-5">
        <View className="p-5">
          <Text className="text-lg font-poppinsBold text-primary">
            Alat Terintegrasi
          </Text>
          <Text className="text-primary font-poppinsMedium">
            Aplikasi telah terhubung dengan alat
          </Text>
        </View>

        <ScrollView horizontal={true}>
          <View className="flex-row space-x-2">
            {card2(
              "Detektor Suhu",
              "digunakan untuk mengukur suhu pada kolam",
              require("@/assets/images/sensorSuhu.png")
            )}
            {card2(
              "Detektor DO",
              "digunakan untuk mengukur oksigen pada kolam",
              require("@/assets/images/sensorDO.jpg")
            )}
            {card2(
              "Detektor PH",
              "digunakan untuk mengukur asam dan basa pada kolam",
              require("@/assets/images/sensorPH.jpg")
            )}
            {card2(
              "Detektor TDS",
              " digunakan untuk mengukur jumlah padatan atau partikel terlarut didalam kolam",
              require("@/assets/images/sensorTDS.jpg")
            )}
          </View>
        </ScrollView>
      </View>

      {/* Menu 3*/}
      <View className="mt-5">
        <View className="flex-row justify-between items-center p-5">
          <View>
            <Text className="text-lg font-poppinsBold text-primary">
              Pembelian Alat Budidaya{" "}
            </Text>
            <Text className="text-primary font-poppinsMedium">
              Membeli alat budidaya{" "}
            </Text>
          </View>
          <View className="flex-row space-x-2">
            <TouchableOpacity>
              <Text className="text-[#6EB4FF] font-poppinsBold">
                Lihat Semua{" >>"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView horizontal={true}>
          <View className="flex-row space-x-2 ">
            {card3(
              "Segera Hadir",
              "Rp ?",
              "",
              require("@/assets/images/image.png")
            )}
            {card3(
              "Segera Hadir",
              "Rp ?",
              "",
              require("@/assets/images/image.png")
            )}
            {/* {card3(
              "Detektor DO",
              "Rp 20.000",
              "digunakan untuk mengukur oksigen pada kolam",
              require("@/assets/images/vektorAlat.png")
            )}
            {card3(
              "Detektor PH",
              "Rp 20.000",
              "digunakan untuk mengukur asam dan basa pada kolam",
              require("@/assets/images/vektorAlat.png")
            )}
            {card3(
              "Detektor TDS",
              "Rp 20.000",
              " digunakan untuk mengukur jumlah padatan atau partikel terlarut didalam kolam",
              require("@/assets/images/vektorAlat.png")
            )} */}
          </View>
        </ScrollView>
      </View>
      <View className="mt-20"></View>
    </ScrollView>
  );
};

export default Beranda;

import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import Header from "../(componens)/Header";

const Akun = () => {
  return (
    <ScrollView>
      {/* Header */}
      {Header()}
      <View className=" bg-opacity-40 pt-1 pl-3 rounded-b-2xl">
        <TouchableOpacity className="items-center bg-primary p-2 w-40 rounded-full mt-2">
          <Text className="text-white text-xl font-poppinsBold">
            Ubah Profile
          </Text>
        </TouchableOpacity>
      </View>

      {/* Fitur2 - Profil Budidaya */}
      <View className="px-5 pt-5">
        <Text className="text-lg font-poppinsBold text-primary">
          Profil Budidaya
        </Text>
        <Text className="text-primary font-poppinsMedium">
          Informasi terkait budidaya pengguna
        </Text>

        <View className="bg-primary h-72 rounded-2xl w-full mt-4 overflow-hidden">
          <ImageBackground
            source={require("@/assets/images/gamabr.jpg")}
            resizeMode="cover"
            className="flex-1 justify-end"
          >
            <View className=" bg-opacity-40 p-1 rounded-b-2xl">
              <TouchableOpacity className="mt-6 p-2 bg-white rounded-full w-40 items-center">
                <Text className="text-primary text-base font-poppinsBold">
                  Ubah Profile Budidaya
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>

      {/* Fitur3 - Alat Terintegrasi */}
      <View className="px-5 pt-5">
        <Text className="text-lg font-poppinsBold text-primary">
          Alat Terintegrasi
        </Text>
        <Text className="text-primary font-poppinsMedium">
          Daftar alat yang dimiliki pengguna
        </Text>
      </View>

      {/* sensor */}
      <View className="p-5">
        {/* sensor 1 */}
        <View className="flex-row justify-between items-center rounded-full border-primary border-2 p-2 mb-2">
          <Text className="text-primary font-poppinsBold">Detektor Suhu</Text>
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity className="items-center bg-primary py-2 px-6 rounded-full">
              <Text className="text-white font-poppinsMedium">
                Rekap Status
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center bg-white py-2 px-6 rounded-full">
              <Text className="text-primary font-poppinsMedium">
                Cek Performa
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* sensor 2 */}
        <View className="flex-row justify-between items-center rounded-full border-primary border-2 p-2 mb-2">
          <Text className="text-primary font-poppinsBold">Detektor pH</Text>
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity className="items-center bg-primary py-2 px-6 rounded-full">
              <Text className="text-white font-poppinsMedium">
                Rekap Status
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center bg-white py-2 px-6 rounded-full">
              <Text className="text-primary font-poppinsMedium">
                Cek Performa
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* sensor 3 */}
        <View className="flex-row justify-between items-center rounded-full border-primary border-2 p-2 mb-2">
          <Text className="text-primary font-poppinsBold">Detektor DO</Text>
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity className="items-center bg-primary py-2 px-6 rounded-full">
              <Text className="text-white font-poppinsMedium">
                Rekap Status
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center bg-white py-2 px-6 rounded-full">
              <Text className="text-primary font-poppinsMedium">
                Cek Performa
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* sensor 4 */}
        <View className="flex-row justify-between items-center rounded-full border-primary border-2 p-2 mb-2">
          <Text className="text-primary font-poppinsBold">Detektor TDS</Text>
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity className="items-center bg-primary py-2 px-6 rounded-full">
              <Text className="text-white font-poppinsMedium">
                Rekap Status
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center bg-white py-2 px-6 rounded-full">
              <Text className="text-primary font-poppinsMedium">
                Cek Performa
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Akun;

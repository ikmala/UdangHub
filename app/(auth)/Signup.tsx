import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  Modal,
} from "react-native";
import { auth } from "../../firebase";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import QRCodeScanner from "@/hooks/QRCodeScanner";
import { EyeIcon, CameraIcon } from "react-native-heroicons/outline";
import { useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";

const Signup = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [qrCode, setQRCode] = useState("");
  const [cameraVisible, setCameraVisible] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setErrorMessage("Password anda salah");
      return;
    }
    setErrorMessage("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Pendaftaran Berhasil", "Akun Anda berhasil dibuat");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      router.replace("/(tabs)/Beranda");
    } catch (error) {
      const firebaseError = error as FirebaseError;
      if (firebaseError.code === "auth/email-already-in-use") {
        setErrorMessage("Email sudah terdaftar. Gunakan email lain.");
      } else if (firebaseError.code === "auth/invalid-email") {
        setErrorMessage("Format email tidak valid.");
      } else if (firebaseError.code === "auth/weak-password") {
        setErrorMessage("Password terlalu lemah. Gunakan minimal 6 karakter.");
      } else {
        setErrorMessage("Terjadi kesalahan. Silakan coba lagi.");
      }
    }
  };

  const handleBarCodeScanned = (data: string) => {
    setQRCode(data);
    setCameraVisible(false);
  };

  const handleScanQR = async () => {
    if (permission?.granted) {
      setCameraVisible(true);
    } else {
      const { granted } = await requestPermission();
      if (granted) {
        setCameraVisible(true);
      } else {
        Alert.alert(
          "Perizinan Kamera",
          "Izin kamera diperlukan untuk scan QR."
        );
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View className="flex-1 items-center bg-primary">
        <Modal visible={cameraVisible} animationType="slide">
          <QRCodeScanner
            onCodeScanned={handleBarCodeScanned}
            onClose={() => setCameraVisible(false)}
          />
        </Modal>

        <Image
          source={require("@/assets/images/vector-signup.png")}
          className="w-full absolute top-28"
          style={{ top: 150 }}
        />
        <View className="absolute top-20">
          <Image source={require("@/assets/images/Logo_modang2.png")} />
        </View>

        <View className="absolute bottom-20 w-full px-6">
          <Text className="font-poppinsBold mb-4 text-white text-2xl">
            Sign Up
          </Text>
          <Text className="text-white font-poppinsMedium mb-6">
            Buat Akun untuk memulai budidaya
          </Text>

          <View className="mb-4">
            <TextInput
              placeholder="Email"
              className="w-full border bg-white text-primary border-x-black p-4 rounded-full pl-6 font-interMedium"
              placeholderTextColor="#002A58"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View className="mb-2">
            <View className="flex-row items-center border bg-white border-x-black rounded-full">
              <TextInput
                placeholder="Password"
                secureTextEntry={!showPassword}
                className="flex-1 p-4 text-primary pl-6 font-interMedium"
                placeholderTextColor="#002A58"
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                className="pr-4"
              >
                <EyeIcon color="black" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <View className="mb-6">
            <View className="flex-row items-center border bg-white border-x-black rounded-full">
              <TextInput
                placeholder="Confirm Password"
                secureTextEntry={true}
                className="flex-1 p-4 text-primary pl-6 font-interMedium"
                placeholderTextColor="#002A58"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
            </View>
            {errorMessage ? (
              <Text className="text-red-500 mt-2">{errorMessage}</Text>
            ) : null}
          </View>

          <View className="mb-2">
            <View className="flex-row items-center border bg-white border-x-black rounded-full">
              <TextInput
                placeholder="Code QR"
                className="flex-1 p-4 text-primary pl-6 font-interMedium"
                placeholderTextColor="#002A58"
                value={qrCode}
                onChangeText={setQRCode}
                editable={false}
              />
              <TouchableOpacity onPress={handleScanQR} className="pr-4">
                <CameraIcon color="black" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-row justify-center mb-6">
            <Text className="text-secondary font-interMedium">
              Sudah memiliki akun?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.replace("/(auth)/Login")}>
              <Text className="text-white font-interBold">Login</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={handleSignup}
            className="bg-white p-6 rounded-full"
          >
            <Text className="text-primary text-2xl text-center font-poppinsMedium">
              Daftar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Signup;

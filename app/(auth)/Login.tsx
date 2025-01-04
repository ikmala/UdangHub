import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { EyeIcon } from "react-native-heroicons/outline";
import { FirebaseError } from "firebase/app";
import { useRouter } from "expo-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      router.replace("/(tabs)/Beranda");
    } catch (error) {
      const firebaseError = error as FirebaseError;
      if (firebaseError.code === "auth/user-not-found") {
        setErrorMessage("Pengguna tidak ditemukan. Periksa email Anda.");
      } else if (firebaseError.code === "auth/wrong-password") {
        setErrorMessage("Password salah. Coba lagi.");
      } else if (firebaseError.code === "auth/invalid-email") {
        setErrorMessage("Format email tidak valid.");
      } else {
        setErrorMessage("Terjadi kesalahan. Coba lagi.");
      }
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View className="flex-1 items-center">
        <Image
          source={require("@/assets/images/vector-login.png")}
          className="w-full absolute top-28"
          style={{ top: 150 }}
        />
        <View className="absolute top-20">
          <Image
            source={require("@/assets/images/Logo-udangBlack.png")}
            className="w-[70px] h-[70px]"
          />
        </View>

        <View className="absolute bottom-20 w-full px-6">
          <Text className="font-poppinsBold mb-4 text-primary text-2xl">
            LOGIN
          </Text>
          <Text className="text-primary font-poppinsMedium mb-6">
            Login untuk masuk ke akunmu
          </Text>

          <View className="mb-4">
            <TextInput
              placeholder="Email"
              className="w-full border bg-primary text-white border-x-primary p-4 rounded-full pl-6 font-interMedium"
              placeholderTextColor="#ffffff"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View className="mb-6 flex-row items-center border bg-primary border-x-primary rounded-full">
            <TextInput
              placeholder="Password"
              secureTextEntry={!showPassword}
              className="flex-1 p-4 text-white pl-6 font-interMedium"
              placeholderTextColor="#ffffff"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              className="pr-4"
            >
              <EyeIcon color="white" size={20} />
            </TouchableOpacity>
          </View>

          {errorMessage ? (
            <Text className="text-red-500 mb-4">{errorMessage}</Text>
          ) : null}

          <View className="flex-row justify-center mb-6">
            <Text className="text-secondary font-interMedium">
              Belum memiliki akun?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.replace("/(auth)/Signup")}>
              <Text className="text-primary font-interBold">Sign Up</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={handleLogin}
            className="bg-primary p-6 rounded-full"
          >
            <Text className="text-white text-center font-poppinsMedium">
              Masuk
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

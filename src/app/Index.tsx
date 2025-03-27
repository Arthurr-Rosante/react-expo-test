import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomePage() {
  return (
    <View className="bg-gray-300 rounded-md w-96 mx-auto items-center space-y-2 py-4 px-2">
      <Text className="font-bold text-2xl">Homepage</Text>
      <Link href="./auth/login">
        <TouchableOpacity className="p-2 rounded-lg min-w-24 text-center bg-blue-500 hover:bg-blue-800 ">
          <Text className="font-semibold text-white">Login</Text>
        </TouchableOpacity>
      </Link>
      <Link href="./auth/register">
        <TouchableOpacity className="p-2 rounded-lg min-w-24 text-center bg-blue-500 hover:bg-blue-800 ">
          <Text className="font-semibold text-white ">Registro</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

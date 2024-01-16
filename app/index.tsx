import { router } from "expo-router";
import { useEffect } from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import { Button, Text } from "react-native-paper";

export default function App() {
  useEffect(() => {
    setTimeout(() => router.push("/tabs/home"), 1000);
  });
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Hello World</Text>
      <Button icon="camera" mode="contained">
        Hi Fellas
      </Button>
    </View>
  );
}

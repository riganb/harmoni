import { router } from "expo-router";
import { useCallback, useEffect } from "react";
import { View, Image } from "react-native";
import { Button, Text } from "react-native-paper";
import { home_card_artifact } from "../assets/images";

export default function App() {
  const beginJourney = useCallback(() => {
    router.push("/tabs/home");
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <Image source={home_card_artifact} />
      <Text variant="headlineLarge">Welcome to Harmoni</Text>
      <Button
        className="mt-5"
        icon="arrow-expand-right"
        mode="contained"
        onPress={beginJourney}
      >
        Let's begin the journey, shall we?
      </Button>
    </View>
  );
}

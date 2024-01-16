import { Image } from "react-native";
import { View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { home_bg_artifact, home_card_artifact } from "../../assets/images";

export default function App() {
  return (
    <View className="flex-1 p-5">
      <Image source={home_bg_artifact} className="absolute" />
      <Text variant="displaySmall" className="text-black font-bold">
        Namaskar Dost!
      </Text>
      <Text variant="titleLarge" className="mt-4 pr-10 text-[#607B85]">
        Feeling the emotional rollercoaster? Harmoni is your pocket-sized guide
        to navigating life's ups and downs, with expert support, calming tools,
        and a safe space to connect.
      </Text>
      <View className="rounded-3xl bg-white opacity-80 flex-1 m-7 justify-between pb-5">
        <Image source={home_card_artifact} />
        <Text variant="headlineSmall" className="text-black ml-5">
          Have something on your mind?
        </Text>
        <Button mode="contained" className="w-1/2 ml-4">
          Talk Here
        </Button>
      </View>
    </View>
  );
}

import { View, Image, Pressable } from "react-native";
import { Text } from "react-native-paper";
import { CONTENT_PIECES, ContentPiece } from "../../constants/utils";
import { home_card_artifact } from "../../assets/images";
import { ScrollView } from "react-native-gesture-handler";
import { useCallback, useState } from "react";

const ContentCard = ({ contentPiece }: { contentPiece: ContentPiece }) => {
  const [isOpen, setIsOpen] = useState(false);

  const switchState = useCallback(
    () => setIsOpen(!isOpen),
    [isOpen, setIsOpen]
  );

  return (
    <View className="w-full">
      <View className="w-full my-2 border-2 border-gray-800 p-3 rounded-xl">
        <Image
          source={home_card_artifact}
          className="flex-1 aspect-square m-2"
        />
        <Text variant="headlineMedium">{contentPiece.title}</Text>
        <Text variant="bodySmall">
          {isOpen ? contentPiece.longText : contentPiece.shortText}
        </Text>
        <Pressable onPress={switchState} className="mt-2">
          <Text className="text-purple-500" variant="labelMedium">
            READ {isOpen ? "LESS" : "MORE"}...
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View className="flex-1 justify-center items-center p-5">
      <View className="w-full mt-2">
        <Text variant="headlineLarge" className="text-black">
          Resources
        </Text>
      </View>
      <View className="w-full mt-2">
        <Text variant="labelLarge" className="text-blue-500">
          These resources are here to help you understand the world around you a
          little better, and peek into your life in the meantime to reconnect
          with your true self
        </Text>
      </View>
      <View className="flex-1 w-full items-center justify-center mt-2">
        <ScrollView className="w-full">
          {CONTENT_PIECES.map((contentPiece) => (
            <ContentCard contentPiece={contentPiece} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

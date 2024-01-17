import { Image, Pressable } from "react-native";
import { View } from "react-native";
import { Button, Card, Modal, Portal, Text } from "react-native-paper";
import { home_bg_artifact, home_card_artifact } from "../../assets/images";
import { useCallback, useState } from "react";

const InfoModal = ({
  isVisible,
  onDismiss,
}: {
  isVisible: boolean;
  onDismiss: () => void;
}) => {
  return (
    <Modal
      contentContainerStyle={{ flex: 1 }}
      visible={isVisible}
      onDismiss={onDismiss}
    >
      <Pressable
        className="flex-1 w-full px-5 items-center justify-center"
        onPress={onDismiss}
      >
        <View className="w-full bg-white rounded-xl p-5 opacity-70">
          <Text variant="labelLarge" className="text-blue-500">
            The chat interface is brewing up. Coming soon in nearby updates...
          </Text>
          <Text variant="labelLarge" className="text-blue-500 mt-2">
            We really appreciate your patience
          </Text>
        </View>
      </Pressable>
    </Modal>
  );
};

export default function App() {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const showInfo = useCallback(() => setIsInfoVisible(true), []);
  const hideInfo = useCallback(() => setIsInfoVisible(false), []);

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
        <Button mode="contained" className="w-1/2 ml-4" onPress={showInfo}>
          Talk Here
        </Button>
        <Portal>
          <InfoModal onDismiss={hideInfo} isVisible={isInfoVisible} />
        </Portal>
      </View>
    </View>
  );
}

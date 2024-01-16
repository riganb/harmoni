import { Slot } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView, StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaProvider className="flex-1 bg-black">
      <PaperProvider>
        <SafeAreaView
          className="flex-1 bg-white"
          style={{
            marginTop: StatusBar.currentHeight,
          }}
        >
          <Slot />
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

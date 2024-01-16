import { CommonActions } from "@react-navigation/native";
import clsx from "clsx";
import { Slot, router, usePathname } from "expo-router";
import { Tabs } from "expo-router/tabs";
import { useCallback } from "react";
import { Pressable, View } from "react-native";
import { Text } from "react-native-paper";

const TAB_ROUTES = ["home", "doctors", "find", "content"] as const;
const TAB_ROUTES_NAMES: Record<(typeof TAB_ROUTES)[number], string> = {
  home: "Home",
  doctors: "Doctors",
  find: "Map",
  content: "Resources",
};

export default function TabLayout() {
  const pathname = usePathname();

  const goToSegment = useCallback(
    (tab_route: (typeof TAB_ROUTES)[number]) => () => {
      router.push(`/tabs/${tab_route}`);
    },
    []
  );

  return (
    <View className="flex-1 flex-col pb-2">
      <View className="flex-1">
        <Slot />
      </View>
      <View className="flex flex-row h-fit bg-purple-100 mx-2 rounded-full">
        {TAB_ROUTES.map((tab_route) => {
          return (
            <Pressable
              className="flex-1 flex items-center justify-center py-4"
              onPress={goToSegment(tab_route)}
            >
              <Text
                className={clsx(
                  pathname.includes(tab_route)
                    ? "text-purple-700 font-bold"
                    : "text-purple-400"
                )}
              >
                {TAB_ROUTES_NAMES[tab_route]}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

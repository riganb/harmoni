import { useCallback, useMemo, useState } from "react";
import { Linking, Pressable, View } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import { REGIONS } from "../../constants/utils";
import { Button, Modal, Portal, Text } from "react-native-paper";
import { atom, useAtomValue, useSetAtom } from "jotai";

const regionIndexAtom = atom(0);

const RegionDetails = ({
  isVisible,
  onDismiss,
}: {
  isVisible: boolean;
  onDismiss: () => void;
}) => {
  const regionIndex = useAtomValue(regionIndexAtom);
  const region = REGIONS[regionIndex];

  const goToMaps = useCallback(() => {
    // const scheme = Platform.select({
    //   ios: "maps:0,0?q=",
    //   android: "geo:0,0?q=",
    // });
    const scheme = "geo:0,0?q=";
    const latLng = `${region.latitude},${region.longitude}`;
    const label = region.name;
    // const url = Platform.select({
    //   ios: `${scheme}${label}@${latLng}`,
    //   android: `${scheme}${latLng}(${label})`,
    // });
    const url = `${scheme}${latLng}(${label})`;
    Linking.openURL(url);
  }, []);

  const callRegion = useCallback(() => {
    const phoneNumber = region.phone_number;
    Linking.openURL(`tel:${phoneNumber}`);
  }, [region.phone_number]);

  return (
    <Modal
      visible={isVisible}
      onDismiss={onDismiss}
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25,
      }}
    >
      <Pressable
        className="flex-1 w-full justify-center items-center"
        onPress={onDismiss}
      >
        <View className="h-1/2 w-full bg-white justify-between items-start p-5 rounded-xl">
          <Text variant="headlineSmall" className="text-black">
            {region.name}
          </Text>
          <Pressable onPress={callRegion}>
            <Text variant="labelMedium" className="text-blue-700 underline">
              {region.phone_number}
            </Text>
          </Pressable>
          <Pressable
            className="flex-1 w-full my-5 rounded-xl overflow-hidden"
            onPress={goToMaps}
          >
            <MapView className="flex-1 w-full" initialRegion={region}>
              <Marker coordinate={region} />
            </MapView>
          </Pressable>
          <View className="flex-row gap-5 justify-around">
            <Button mode="contained" className="flex-1" onPress={callRegion}>
              Call
            </Button>
            <Button mode="contained" className="flex-1" onPress={goToMaps}>
              Go to Maps
            </Button>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default function App() {
  const initialRegion: Region = {
    latitude: 12.902381398875207,
    longitude: 77.50447896405193,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const [showRegionDetails, setShowRegionDetails] = useState(false);
  const setRegionIndex = useSetAtom(regionIndexAtom);

  const goToRegion = useCallback(
    (regionIndex: number) => () => {
      setRegionIndex(regionIndex);
      setShowRegionDetails(true);
    },
    []
  );

  const hideRegionDetails = useCallback(() => setShowRegionDetails(false), []);

  const regions: Region[] = useMemo(() => {
    return REGIONS.map((region) => ({
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta,
      longitudeDelta: region.longitudeDelta,
    }));
  }, []);

  return (
    <View className="flex-1">
      <Portal>
        <RegionDetails
          isVisible={showRegionDetails}
          onDismiss={hideRegionDetails}
        />
      </Portal>
      <View className="flex-1 rounded-3xl m-3 overflow-hidden">
        <MapView className="flex-1" initialRegion={initialRegion}>
          {regions.map((region, idx) => (
            <Marker
              coordinate={region}
              key={REGIONS[idx].phone_number}
              onPress={goToRegion(idx)}
            />
          ))}
        </MapView>
      </View>
    </View>
  );
}

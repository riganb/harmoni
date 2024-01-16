import { Region } from "react-native-maps";

export const DOCTOR_CARDS_BORDER_COLOURS = ["border-yellow-500", "border-red-500", "border-green-500", "border-purple-500"]

export type RegionData = Region & {
  name: string;
  phone_number: string;
}

export const REGIONS: RegionData[] = [
  {
    name: "Adishaanti Care Clinic",
    phone_number: "+919090889988",
    latitude: 12.907381398875207,
    longitude: 77.50347898405193,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  },
  {
    name: "Muzitic Mental Hospital",
    phone_number: "+919876543201",
    latitude: 12.904381398875207,
    longitude: 77.50547898405193,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  },
  {
    name: "Pratap Hospital",
    phone_number: "+919489300110",
    latitude: 12.902381398875207,
    longitude: 77.50947898405193,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  },
];
import { Image, ScrollView, TextInput, View } from "react-native";
import { Button, Icon, MD3Colors, Searchbar, Text } from "react-native-paper";
import {
  doctor_profile_picture,
  doctors_header_artifact,
} from "../../assets/images";
import clsx from "clsx";
import { useMemo, useState } from "react";

export const DOCTOR_CARDS_BORDER_COLOURS = [
  "border-yellow-500",
  "border-red-500",
  "border-green-500",
  "border-purple-500",
];

const SAMPLE_DOCTORS_DATA: Doctor[] = [
  {
    id: "1",
    name: "Dr. Ravi Shankar",
    speciality: "Psychologist",
    rating: 4.7,
  },
  {
    id: "2",
    name: "Dr. Shakuntala Sharma",
    speciality: "Therapist",
    rating: 4.8,
  },
  {
    id: "3",
    name: "Dr. Momina Shah",
    speciality: "Psychotherapist",
    rating: 4.3,
  },
  {
    id: "4",
    name: "Dr. Ravi Shankar",
    speciality: "Psychologist",
    rating: 4.7,
  },
  {
    id: "5",
    name: "Dr. Shakuntala Sharma",
    speciality: "Therapist",
    rating: 4.8,
  },
  {
    id: "6",
    name: "Dr. Momina Shah",
    speciality: "Psychotherapist",
    rating: 4.3,
  },
  {
    id: "7",
    name: "Dr. Ravi Shankar",
    speciality: "Psychologist",
    rating: 4.7,
  },
];

type Doctor = {
  id: string;
  name: string;
  speciality: string;
  rating: number;
};

const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  return (
    <View
      className={clsx(
        "border-2 rounded-3xl p-5 my-3 flex-row",
        DOCTOR_CARDS_BORDER_COLOURS[
          Number(doctor.id) % DOCTOR_CARDS_BORDER_COLOURS.length
        ]
      )}
    >
      <Image source={doctor_profile_picture} />
      <View className="flex-1 pl-2">
        <View className="flex-col">
          <Text className="text-black font-bold" variant="bodyLarge">
            {doctor.name}
          </Text>
          <Text className="text-black" variant="bodySmall">
            {doctor.speciality}
          </Text>
          <Text className="text-black pt-2" variant="bodySmall">
            {doctor.rating} ⭐
          </Text>
        </View>
      </View>
      <Button mode="contained" className="h-10 self-end">
        Book
      </Button>
    </View>
  );
};

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = useMemo(
    () =>
      SAMPLE_DOCTORS_DATA.filter((doctor) => doctor.name.includes(searchTerm)),
    [searchTerm]
  );

  return (
    <View className="flex-1 p-5">
      <View className="flex-1 rounded-3xl w-full justify-center items-center my-3">
        <View className="px-3 w-full">
          <View className="absolute pl-5 pt-8">
            <Icon source="text-search" size={24} color={MD3Colors.neutral50} />
          </View>
          <TextInput
            placeholder="Doctors"
            className="w-full py-2 mt-5 px-2 pl-11 text-lg rounded-2xl border-2 border-gray-300"
            onChangeText={setSearchTerm}
          />
        </View>
        <Image source={doctors_header_artifact} className="m-5" />
      </View>
      <ScrollView className="pl-5 gap-5 flex-1 mt-3">
        {filteredDoctors.map((doctor) => {
          return <DoctorCard doctor={doctor} key={doctor.id} />;
        })}
      </ScrollView>
    </View>
  );
}

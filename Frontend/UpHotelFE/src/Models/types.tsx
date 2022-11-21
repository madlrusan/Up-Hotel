import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  AdminDashboard: undefined;
  AddNewStaff : undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackNavigatorParamList = {
  Home: undefined;
  NewExpense: undefined;
  NewIncome: undefined;
  NewPayback: undefined;
};

export type MessageNavProps<T extends keyof RootStackNavigatorParamList> = {
  navigation: NativeStackNavigationProp<RootStackNavigatorParamList, T>;
  route: RouteProp<RootStackNavigatorParamList, T>;
};

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./auth";
import { NavigationProp } from "@react-navigation/native";

type RouteKeys = keyof AuthStackParamList;

export type PropsNavigation<RouteName extends RouteKeys> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

export type Navigate = NavigationProp<AuthStackParamList>;

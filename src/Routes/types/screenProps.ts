import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./auth";
import { NavigationProp } from "@react-navigation/native";
import { AppDrowerParamList } from "./app";

type RouteKeys = keyof AuthStackParamList;

export type PropsNavigation<RouteName extends RouteKeys> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

export type NavigateAuth = NavigationProp<AuthStackParamList>;
export type NavigateApp = NavigationProp<AppDrowerParamList>;

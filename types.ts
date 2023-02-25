import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from "@react-navigation/native";

export type RootNavigationParams = {
  Camera: undefined;
  Result: {
    image:string | undefined
  };
};

type NavigationParams =
  RootNavigationParams;

export type ScreenProps<T extends keyof NavigationParams> = NativeStackScreenProps<NavigationParams, T>;

export type RouteProps = RouteProp<RootNavigationParams>;
export type AppNavigationProp = NativeStackNavigationProp<RootNavigationParams>;

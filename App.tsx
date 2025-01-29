import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "@/Routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#f0f4ff" style="dark" />
      <Routes />
    </NavigationContainer>
  );
}

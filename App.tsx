import "./gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "@/Routes";
import { Provider } from "react-redux";
import { store } from "@/contexts/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor="#f0f4ff" style="dark" />
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}

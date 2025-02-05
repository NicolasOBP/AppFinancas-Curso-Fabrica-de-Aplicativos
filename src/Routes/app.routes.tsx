import Home from "@/Pages/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";

const AppDrower = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <AppDrower.Navigator>
      <AppDrower.Screen name="Home" component={Home} />
    </AppDrower.Navigator>
  );
}

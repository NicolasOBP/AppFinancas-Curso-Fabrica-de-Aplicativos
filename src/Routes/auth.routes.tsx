import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "@/Pages/SignIn";
import SignUp from "@/Pages/SignUp";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />

      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerStyle: { backgroundColor: "#3b3bdf" },
          headerTintColor: "#fff",
          headerTitle: "Voltar",
          headerBackTitle: "",
        }}
      />
    </AuthStack.Navigator>
  );
}

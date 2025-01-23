import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
}

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import api from "@/services/api";
import { useNavigation } from "@react-navigation/native";
import { Navigate } from "@/Routes/types/screenProps";
import useSignUp from "../hooks/useSignUp";

type User = {
  name: string;
  email: string;
  password: string;
};

export interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

export const selectUser = (state: RootState) => state.user.user;

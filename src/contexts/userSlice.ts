import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type User = {
  name: string;
  email: string;
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

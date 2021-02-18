import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Thunk } from "..";
import apiClient from "../../lib/apiClient";

interface User {
  id: string;
  name: string;
  teamId: string[];
}

interface UserState {
  user: User;
  loading: boolean;
  error: boolean;
}

export const initialState = {
  user: {
    id: "",
    name: "",
    teamId: [],
  },
  loading: false,
  error: false,
} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserRequest(state) {
      state.user = initialState.user;
      state.error = false;
      state.loading = true;
    },
    getUserSuccess(state, { payload: user }: PayloadAction<User>) {
      state.user = user;
      state.error = false;
      state.loading = false;
    },
    getUserError(state) {
      state.user = initialState.user;
      state.error = true;
      state.loading = false;
    },
  },
});

export const getUser = (userId: string): Thunk => async (dispatch) => {
  try {
    dispatch(getUserRequest());
    let { data: user }: AxiosResponse = await apiClient(`/users/${userId}`, {
      method: "GET",
    });
    dispatch(getUserSuccess(user));
  } catch (err) {
    dispatch(getUserError());
  }
};

export const {
  getUserRequest,
  getUserSuccess,
  getUserError,
} = userSlice.actions;
export default userSlice.reducer;

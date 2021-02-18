import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Thunk } from "..";
import apiClient from "../../lib/apiClient";

interface User {
  id: string;
  name: string;
  teamId: string[];
}

interface UsersState {
  users: User[];
  loading: boolean;
  error: boolean;
}

export const initialState = {
  users: [],
  loading: false,
  error: false,
} as UsersState;

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsersRequest(state) {
      state.users = [];
      state.error = false;
      state.loading = true;
    },
    getUsersSuccess(state, { payload: users }: PayloadAction<User[]>) {
      state.users = users;
      state.error = false;
      state.loading = false;
    },
    getUsersError(state) {
      state.users = [];
      state.error = true;
      state.loading = false;
    },
  },
});

export const getUsers = (currTeamId: string | null): Thunk => async (dispatch) => {
  try {
    dispatch(getUsersRequest());
    let { data: users }: AxiosResponse = await apiClient("/users/", {
      method: "GET",
    });
    if (currTeamId) {
        users = users.filter((user: User) => user.teamId.find((id: string) => id === currTeamId))
    }
    dispatch(getUsersSuccess(users));
  } catch (err) {
    dispatch(getUsersError());
  }
};

export const {
  getUsersRequest,
  getUsersSuccess,
  getUsersError,
} = usersSlice.actions;
export default usersSlice.reducer;

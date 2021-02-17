import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Thunk } from "..";
import apiClient from "../../lib/apiClient";

interface TeamState {
  teams: object[];
  loading: boolean;
  error: null;
}

interface TeamsSuccessPayload {
  teams: object[];
}

export const initialState = {
  teams: [],
  loading: false,
  error: null,
} as TeamState;

const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    getTeamsRequest(state) {
      state.error = null;
      state.loading = true;
    },
    getTeamsSuccess(state, action: PayloadAction<TeamsSuccessPayload>) {
      state.teams = action.payload.teams;
      state.error = null;
      state.loading = false;
    },
  },
});

export const getTeams = (): Thunk => async (dispatch) => {
  try {
    dispatch(getTeamsRequest());
    const response = await apiClient("/teams/", { method: "GET" });
    console.log(response)
  } catch (err) {
    console.log(err);
  }
};

export const { getTeamsRequest, getTeamsSuccess } = teamsSlice.actions;

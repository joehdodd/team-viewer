import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Thunk } from "..";
import apiClient from "../../lib/apiClient";

interface Team {
  id: string;
  name: string;
}

interface TeamState {
  teams: Team[];
  loading: boolean;
  error: boolean;
}

export const initialState = {
  teams: [],
  loading: false,
  error: false,
} as TeamState;

const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    getTeamsRequest(state) {
      state.teams = [];
      state.error = false;
      state.loading = true;
    },
    getTeamsSuccess(state, { payload: teams }: PayloadAction<Team[]>) {
      state.teams = teams;
      state.error = false;
      state.loading = false;
    },
    getTeamsError(state) {
      state.teams = [];
      state.error = true;
      state.loading = false;
    },
  },
});

export const getTeams = (): Thunk => async (dispatch) => {
  try {
    dispatch(getTeamsRequest());
    const { data: teams }: AxiosResponse = await apiClient("/teams/", {
      method: "GET",
    });
    dispatch(getTeamsSuccess(teams));
  } catch (err) {
    dispatch(getTeamsError());
  }
};

export const {
  getTeamsRequest,
  getTeamsSuccess,
  getTeamsError,
} = teamsSlice.actions;
export default teamsSlice.reducer;

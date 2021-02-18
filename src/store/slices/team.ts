import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Thunk } from "..";
import apiClient from "../../lib/apiClient";

interface Team {
  id: string;
  name: string;
}

interface TeamState {
  team: Team;
  loading: boolean;
  error: boolean;
}

export const initialState = {
  team: {
      id: "",
      name: ""
  },
  loading: false,
  error: false,
} as TeamState;

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    getTeamRequest(state) {
      state.team = initialState.team;
      state.error = false;
      state.loading = true;
    },
    getTeamSuccess(state, { payload: team }: PayloadAction<Team>) {
      state.team = team;
      state.error = false;
      state.loading = false;
    },
    getTeamError(state) {
      state.team = initialState.team;
      state.error = true;
      state.loading = false;
    },
  },
});

export const getTeam = (teamId: string): Thunk => async (dispatch) => {
  try {
    dispatch(getTeamRequest());
    const { data: team }: AxiosResponse = await apiClient(`/teams/${teamId}`, {
      method: "GET",
    });
    dispatch(getTeamSuccess(team));
  } catch (err) {
    dispatch(getTeamError());
  }
};

export const {
  getTeamRequest,
  getTeamSuccess,
  getTeamError,
} = teamSlice.actions;
export default teamSlice.reducer;

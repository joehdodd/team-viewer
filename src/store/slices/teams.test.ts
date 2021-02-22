import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { initialState, getTeamsRequest, getTeamsSuccess } from "./teams";
import axios from "axios";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("teams slice", () => {
  it("should set teams state", async () => {
    const store = mockStore(initialState);
    const teamsData = [
      {
        id: "798798-bsdfs-68698",
        name: "Fuzzy Slippers",
      },
      {
        id: "asdf-234-fdsa",
        name: "Goofy Turkey",
      },
    ];
    const response = teamsData;
    mockAxios.get.mockResolvedValueOnce(response);
    await store.dispatch(getTeamsRequest());
    await store.dispatch(getTeamsSuccess(response));
    const expectedActions = [getTeamsRequest(), getTeamsSuccess(response)];
    expect(store.getActions()).toEqual(expectedActions);
  });
});

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { initialState, getTeamRequest, getTeamSuccess } from "./team";
import axios from "axios";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("team slice", () => {
  it("should set team state", async () => {
    const store = mockStore(initialState);
    const teamData = {
      id: "798798-bsdfs-68698",
      name: "Fuzzy Slippers",
    };
    const response = teamData;
    mockAxios.get.mockResolvedValueOnce(response);
    await store.dispatch(getTeamRequest());
    await store.dispatch(getTeamSuccess(response));
    const expectedActions = [getTeamRequest(), getTeamSuccess(response)];
    expect(store.getActions()).toEqual(expectedActions);
  });
});

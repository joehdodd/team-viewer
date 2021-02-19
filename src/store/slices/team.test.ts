import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  initialState,
  getTeamRequest,
  getTeamSuccess,
} from "./team";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("team slice", () => {
  it("should set team state", async () => {
    const store = mockStore(initialState);
    const teamData = {
      id: "798798-bsdfs-68698",
      name: "Fuzzy Slippers",
    };

    await store.dispatch(getTeamRequest());
    await store.dispatch(getTeamSuccess(teamData));
    const expectedActions = [getTeamRequest(), getTeamSuccess(teamData)];
    expect(store.getActions()).toEqual(expectedActions);
  });
});

import React from "react";
import {
  render,
  screen,
  fireEvent,
  RenderResult,
} from "@testing-library/react";
import { Provider } from "react-redux";

import store from "../../store/";

import Teams from "./";

const renderTeams = (): RenderResult =>
  render(
    <Provider store={store}>
      <Teams />
    </Provider>
  );

describe("<Teams/>", () => {
  test("should render the Teams view.", async () => {
    renderTeams();
  });
});

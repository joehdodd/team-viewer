import React from "react";
import {
  render,
  screen,
  fireEvent,
  RenderResult,
} from "@testing-library/react";
import { Provider } from "react-redux";
import fetchMock from "fetch-mock";

import store from "../../store/";

import Users from "./";

const renderUsers = (): RenderResult =>
  render(
    <Provider store={store}>
      <Users />
    </Provider>
  );

describe("<Users/>", () => {
  test("should render the Users view.", async () => {
    renderUsers();
  });
});

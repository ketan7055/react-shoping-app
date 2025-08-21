import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import LoginScreen from "../src/screen/login";

describe("LoginScreen", () => {
  const navigation = { navigate: jest.fn(), replace: jest.fn() };

  it("renders inputs and login button", () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <LoginScreen navigation={navigation} />
      </Provider>
    );
    expect(getByPlaceholderText("Email")).toBeTruthy();
    expect(getByPlaceholderText("Password")).toBeTruthy();
    expect(getByText("Login")).toBeTruthy();
  });

  it("navigates to Signup when link is pressed", () => {
    const { getByText } = render(
      <Provider store={store}>
        <LoginScreen navigation={navigation} />
      </Provider>
    );
    fireEvent.press(getByText("Sign up"));
    expect(navigation.navigate).toHaveBeenCalledWith("Signup");
  });

  it("dispatches login and navigates to Home on success", async () => {
    jest.useFakeTimers();
    const { getByText } = render(
      <Provider store={store}>
        <LoginScreen navigation={navigation} />
      </Provider>
    );

    fireEvent.press(getByText("Login"));
    jest.runAllTimers();
    await waitFor(() =>
      expect(navigation.replace).toHaveBeenCalledWith("Home")
    );
  });
});

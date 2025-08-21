import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import SignupScreen from "../src/screen/signup";

describe("SignupScreen", () => {
  const navigation = { navigate: jest.fn() };

  it("renders inputs and signup button", () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <SignupScreen navigation={navigation} />
      </Provider>
    );
    expect(getByPlaceholderText("Email")).toBeTruthy();
    expect(getByPlaceholderText("Password")).toBeTruthy();
    expect(getByText("Sign Up")).toBeTruthy();
  });

  it("dispatches signup and navigates back to Login", async () => {
    jest.useFakeTimers();
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <SignupScreen navigation={navigation} />
      </Provider>
    );
    fireEvent.changeText(getByPlaceholderText("Email"), "test@test.com1");
    fireEvent.changeText(getByPlaceholderText("Password"), "123456");
    fireEvent.press(getByText("Sign Up"));
    jest.runAllTimers();
    await waitFor(() =>
      expect(navigation.navigate).toHaveBeenCalledWith("Login")
    );
  });
});

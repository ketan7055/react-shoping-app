import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import HomeScreen from "../src/screen/home";

describe("HomeScreen", () => {
  const navigation = { navigate: jest.fn() };

  it("renders list of products with title and price", () => {
    const { getByText } = render(<HomeScreen navigation={navigation} />);
    expect(getByText(/Essence Mascara Lash Princess/)).toBeTruthy();
  });

  it("navigates to ProductDetails on card press", () => {
    const { getByTestId } = render(<HomeScreen navigation={navigation} />);
    fireEvent.press(getByTestId("product-1"));
    expect(navigation.navigate).toHaveBeenCalledWith(
      "ProductDetails",
      expect.any(Object)
    );
  });
});

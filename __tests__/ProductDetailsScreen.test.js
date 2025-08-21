import React from "react";
import { render } from "@testing-library/react-native";
import ProductDetailsScreen from "../src/screen/productDetails";

describe("ProductDetailsScreen", () => {
  const product = {
    title: "Sample",
    description: "Desc",
    price: 200,
    images: ["https://example.com/image.png"],
  };

  it("renders product details and discounted price", () => {
    const route = { params: { product } };
    const { getByText } = render(<ProductDetailsScreen route={route} />);
    expect(getByText("Name: Sample")).toBeTruthy();
    expect(getByText("Description: Desc")).toBeTruthy();
    expect(getByText("Original Price: ₹200")).toBeTruthy();
    expect(getByText("Discounted Price: ₹100")).toBeTruthy();
  });
});

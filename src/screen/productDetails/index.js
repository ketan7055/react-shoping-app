import React from "react";
import { View, Text } from "react-native";

export default function ProductDetailsScreen({ route }) {
  const { product } = route.params;

  // Example of closure
  const getDiscountedPrice = (discount) => () => product.price - discount;

  const calculatePrice = getDiscountedPrice(100);

  return (
    <View>
      <Text>Name: {product.name}</Text>
      <Text>Original Price: ₹{product.price}</Text>
      <Text>Discounted Price: ₹{calculatePrice()}</Text>
    </View>
  );
}

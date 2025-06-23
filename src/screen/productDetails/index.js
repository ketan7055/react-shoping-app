import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function ProductDetailsScreen({ route }) {
  const { product } = route.params;

  // Example of closure
  const getDiscountedPrice = (discount) => () => product.price - discount;

  const calculatePrice = getDiscountedPrice(100);
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: product?.images[0],
        }}
      />
      <Text>Name: {product.title}</Text>
      <Text>Description: {product.description}</Text>
      <Text>Original Price: ₹{product.price}</Text>
      <Text>Discounted Price: ₹{calculatePrice()}</Text>
    </View>
  );
}

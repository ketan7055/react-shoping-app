import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function ProductDetailsScreen({ route }) {
  const { product } = route.params;

  // Example of closure
  const getDiscountedPrice = (discount) => () => product.price - discount;

  function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
  }
  const user = { name: "Ankit" };
  greet.call(user, "Hello");

  const calculatePrice = getDiscountedPrice(100);
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: product?.images[0],
        }}
      />
      <Text style={styles.text}>Name: {product.title}</Text>
      <Text style={styles.textDesc}>Description: {product.description}</Text>
      <Text style={styles.text}>Original Price: ₹{product.price}</Text>
      <Text style={styles.text}>Discounted Price: ₹{calculatePrice()}</Text>
    </View>
  );
}

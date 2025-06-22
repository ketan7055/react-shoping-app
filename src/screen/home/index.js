import React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";

const products = [
  { id: "1", name: "Shirt", price: 500 },
  { id: "2", name: "Shoes", price: 1200 },
];

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProductDetails", { product: item })
            }
          >
            <Text>
              {item.name} - ₹{item.price}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

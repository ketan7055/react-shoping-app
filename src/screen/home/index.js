import React, { useCallback, useMemo } from "react";
import { View, FlatList, Text, TouchableOpacity, Image } from "react-native";
import data from "../../../assets/products.json"; // ✅ Local JSON
import styles from "./styles";

export default function HomeScreen({ navigation }) {
  const renderItem = useCallback(({ item }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        testID={`product-${item.id}`}
        onPress={() => navigation.navigate("ProductDetails", { product: item })}
      >
        <Image style={styles.img} source={{ uri: item?.thumbnail }} />
        <Text>
          {item.title} - ₹{item.price}
        </Text>
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

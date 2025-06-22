import React, { useState, useCallback } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authActions";

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showAlert = useCallback((message) => {
    Alert.alert("Login", message);
  }, []);

  const handleLogin = () => {
    dispatch(login(email, password))
      .then((msg) => {
        showAlert(msg);
        navigation.navigate("Home");
      })
      .catch((err) => showAlert(err));
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
      <Text onPress={() => navigation.navigate("Signup")}>
        Don't have an account? Sign up
      </Text>
    </View>
  );
}

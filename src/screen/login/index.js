// LoginScreen.js
import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  Button,
  Text,
} from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authActions";
import styles from "./styles";

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");

  const handleLogin = async () => {
    try {
      const msg = await dispatch(login(email, password));
      console.log("msg :: ", msg);
      navigation.replace("Home");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
        <Button title="Login" onPress={handleLogin} />
        <Text>
          Don't have an account?{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Signup")}
          >
            Sign up
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

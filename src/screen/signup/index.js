import React, { useState } from "react";
import { View, TextInput, Button, KeyboardAvoidingView } from "react-native";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/actions/authActions";
import styles from "./styles";

export default function SignupScreen({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    await dispatch(signup(email, password));
    navigation.navigate("Login");
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
        <Button title="Sign Up" onPress={handleSignup} />
      </View>
    </KeyboardAvoidingView>
  );
}

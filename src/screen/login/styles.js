import { StyleSheet } from "react-native";
import { COLORS } from "../../color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.COLOR_6C63FF,
    justifyContent: "center",
    alignItems: "center",
    // padding: 16,
  },
  card: {
    width: "100%",
    maxWidth: 350,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 24,
    elevation: 6,
  },
  title: {
    textAlign: "center",
    marginBottom: 24,
    fontSize: 24,
  },
  input: {
    marginBottom: 16,
    backgroundColor: "white",
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.COLOR_6C63FF,
    borderRadius: 6,
  },
  button: {
    marginTop: 8,
    paddingVertical: 6,
  },
  link: {
    marginTop: 12,
    textAlign: "center",
    color: COLORS.COLOR_6C63FF,
    textDecorationLine: "underline",
  },
});
export default styles;

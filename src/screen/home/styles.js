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
    backgroundColor: "white",
    margin: 10,
    alignItems: "center",
    borderRadius: 8,
    padding: 5,
  },
  img: {
    width: 100,
    height: 100,
  },
});
export default styles;

import { StyleSheet } from "react-native";
import { COLORS } from "../../color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.COLOR_6C63FF,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  img: {
    width: 200,
    height: 150,
  },
  text: {
    color: COLORS.COLOR_EBEBEB,
    marginTop: 10,
  },
  textDesc: {
    color: COLORS.COLOR_EBEBEB,
    textAlign: "center",
    marginTop: 10,
  },
});
export default styles;

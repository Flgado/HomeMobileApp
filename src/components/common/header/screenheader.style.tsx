import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

export const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const btnImg = (dimension: number) => ({
  width: dimension,
  height: dimension,
  borderRadius: SIZES.small / 1.25,
});


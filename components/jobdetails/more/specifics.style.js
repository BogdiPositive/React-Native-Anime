import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  },
  title: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
  },

  pointWrapper: {
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 20,
    alignItems: "flex-start",
    marginVertical: SIZES.medium,
  },
  pointText: {
    fontSize: SIZES.large - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft: SIZES.small,
  },
});

export default styles;

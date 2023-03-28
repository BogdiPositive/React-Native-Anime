import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (selectedAnime, item) => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: selectedAnime === item.mal_id ? COLORS.primary : "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: SIZES.medium - 5,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  logoContainer: (selectedAnime, item) => ({
    width: 100,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    borderRadius: SIZES.medium,
    width: "100%",
    height: "100%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.medium,
    marginRight: SIZES.small,
  },
  jobName: (selectedAnime, item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    overflow: "hidden",
    color: selectedAnime === item.mal_id ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: "column",
    marginTop: 5,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  generWrapper: {
    flexDirection: "row",
    marginTop: 5,
    gap: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (selectedAnime, item) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedAnime === item.mal_id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;

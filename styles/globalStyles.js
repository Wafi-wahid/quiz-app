import { StyleSheet } from "react-native";
import { COLORS } from "./colors";
import { FONTS } from "./fonts";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  welcomeText: {
    fontSize: FONTS.large,
    fontWeight: FONTS.bold,
    marginBottom: 20,
    textAlign: "center",
    marginTop: 50,
  },
  timerText: {
    fontSize: FONTS.medium,
    fontWeight: FONTS.bold,
    color: COLORS.danger,
    marginBottom: 20,
  },
  questionText: {
    marginBottom: 10,
    fontSize: FONTS.medium,
    fontWeight: FONTS.bold,
    textAlign: "center",
  },
  answerText: {
    borderWidth: 1,
    borderColor: COLORS.text,
    borderRadius: 5,
    padding: 10,
    fontSize: FONTS.small,
  },
  scoreText: {
    marginTop: 20,
    fontSize: FONTS.medium,
    fontWeight: FONTS.bold,
    color: COLORS.secondary,
  },
});

import { StyleSheet } from "react-native";
import { colors } from "../constants/branding";

const globalStyles = StyleSheet.create({
  textRegular: {
    fontFamily: "Figtree-Regular",
  },
  textMedium: {
    fontFamily: "Figtree-Medium",
  },
  textBold: {
    fontFamily: "Figtree-Bold",
  },
  flex: {
    flex: 1,
  },
  roundButton: {
    width: 40,
    height: 40,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderRadius: 50,
  }
})

export default globalStyles
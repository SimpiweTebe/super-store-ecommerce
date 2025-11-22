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
  HeadingOne: {
    fontFamily: "Figtree-Bold",
    fontSize: 20,
    color: colors.black
  },
  HeadingTwo: {
    fontFamily: "Figtree-Bold",
    fontSize: 16,
    color: colors.black
  },
  roundButton: {
    width: 45,
    height: 45,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderRadius: 50,
  },
  defaultBackground: {
    backgroundColor: 'white'
  },
  borderRadius: {
    borderRadius: 10
  }
})

export default globalStyles
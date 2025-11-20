import { StyleSheet } from "react-native";
import { colors } from "../../constants/branding";

const styles = StyleSheet.create({
button: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 80,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonWide: {
    paddingHorizontal: 20,
    marginRight: 10,
    gap: 5
  },
  activeButton: {
    backgroundColor: colors.black,
    borderColor: colors.black,
  },
  text: {
    color: colors.black
  },
  activeText: {
    color: '#fff'
  },
})

export default styles
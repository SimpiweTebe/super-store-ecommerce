import { StyleSheet } from "react-native";
import { colors } from "../../constants/branding";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    gap: 10
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderRadius: 50,
    flex: 1
  },
  button: {
    backgroundColor: colors.actionGreen,
  }
})

export default styles
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
  }
})

export default styles
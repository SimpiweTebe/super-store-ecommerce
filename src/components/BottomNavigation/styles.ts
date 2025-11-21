import { StyleSheet } from "react-native";
import { colors } from "../../constants/branding";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  linkItem: {
    backgroundColor: colors.lightGrey,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20
  },
  linkText: {
    paddingRight: 15,
    paddingLeft: 10,
    fontSize: 13
  }
})

export default styles
import { StyleSheet } from "react-native";
import { colors } from "../../constants/branding";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    backgroundColor: '#fff',
    flex: 1
  },
  cartList: {
    gap: 15
  },
  cartActions: {
    backgroundColor: '#fff'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  totalContainer: {
    borderColor: colors.lightGrey,
    borderWidth:2,
    borderRadius: 20,
    padding: 20,
    marginTop: 20
  },
  text: {
    color: colors.grey,
    fontSize: 15
  },
  inputField: {
    backgroundColor: colors.lightGrey,
    borderRadius: 50,
    paddingVertical: 8,
    paddingLeft: 15
  },
  total: {
    borderTopColor: colors.lightGrey,
    borderTopWidth: 1,
    paddingTop: 15
  }
})

export default styles
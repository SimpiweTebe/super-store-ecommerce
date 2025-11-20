import { StyleSheet } from "react-native"
import { colors } from "../../constants/branding"


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  userActions: {
    backgroundColor: 'white',
    padding: 6,
    paddingRight: 15,
    borderRadius: 20,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
    borderColor: colors.lightGrey,
    borderWidth: 1,
  },
  cartActions: {
    backgroundColor: 'white',
    padding: 6,
    borderRadius: 80,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
})

export default styles
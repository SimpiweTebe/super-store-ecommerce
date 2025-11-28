import { StyleSheet } from "react-native";
import { colors } from "../../constants/branding";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 15,
    borderRadius: 20,
    borderColor: colors.lightGrey,
    borderWidth: 2,
    padding: 10,
    flex: 1
  },
  thumbnail: {
    width: 130,
    height: 100,
    borderRadius: 15
  },
  productName: {
    color: colors.grey,
    fontSize: 13
  },
  cartBottomRow: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  price: {
    minWidth: '40%',
    maxWidth: 120
  },
  cartActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    minWidth: '20%',
    maxWidth: 120,
    backgroundColor: colors.lightGrey,
    padding: 5,
    borderRadius: 15,
  },
  button: {
    width: 25,
    height: 25,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addBtn: {
    backgroundColor: colors.actionGreen
  },
  removeBtn: {
    backgroundColor: '#fff'
  },
  closeBtn: {
    position: 'absolute',
    top: -15,
    right: 0,
    zIndex: 1
  }
})

export default styles
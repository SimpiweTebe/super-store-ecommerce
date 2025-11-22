import { StyleSheet } from "react-native";
import { colors } from "../../constants/branding";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 40
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20
  },
  sizeSelector: {
    marginBottom: 20
  },
  sizeTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  textGrey: {
    color: colors.grey
  },
  sizeButton: {
    marginRight: 8,
    backgroundColor: colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 55,
    height: 55
  },
   activeSizeButton: {
    backgroundColor: '#000',
    borderColor: colors.actionGreen,
    borderWidth: 2
  },
  buttonText: {
    fontSize: 15,
    fontFamily: "Figtree-Medium",
  },
  activeButtonText: {
    color: '#fff'
  }
})

export default styles
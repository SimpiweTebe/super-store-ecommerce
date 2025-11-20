import { StyleSheet } from "react-native";
import { colors } from "../../constants/branding";

const styles = StyleSheet.create({
  carousel: {
    backgroundColor: colors.actionGreen,
    height: 230,
    marginVertical: 20,
    borderRadius: 15,
    overflow: 'hidden'
  },
  carouselImage: {
    height: '100%',
    width: '100%'
  }
})

export default styles
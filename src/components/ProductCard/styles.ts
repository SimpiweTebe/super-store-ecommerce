import { colors } from './../../constants/branding';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: '48%',
    marginBottom: 20
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 240,
    borderRadius: 15,
    overflow: 'hidden',
    borderColor: colors.lightGrey,
    borderWidth: 1
  },
  image: {
   height: '100%',
    width: '100%'
  },
  likeButton: {
    position: 'absolute',
    right: 8,
    top: 8,
    zIndex: 10
  },
  likedItem: {
    borderColor: colors.actionGreen,
    borderWidth: 3,
    borderRadius: 30,
  },
  cardDetails: {
    marginTop: 10
  },
  cardBrand: {
    color: colors.grey,
    fontSize: 13
  },
  cardPrice: {
    color: colors.grey,
    fontSize: 17
  }
})

export default styles
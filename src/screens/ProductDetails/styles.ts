import { JustifyContent } from './../../../node_modules/csstype/index.d';
import { StyleSheet } from "react-native";
import { colors } from "../../constants/branding";

const styles = StyleSheet.create({
  carouselContainer: {
    marginVertical: 20,
    overflow: 'hidden',
    position: 'relative'
  },
  carouselImage: {
    width: '100%',
    height: 250,
    borderRadius: 20
  },
  carouselThumbail: {
    marginRight: 20
  },
  carouselThumbailImage: {
    borderWidth: 1.5,
    borderColor: colors.lightGrey,
    borderRadius: 50,
    width: 60,
    height: 60
  },
  activeCarouselThumbail: {
    borderWidth: 2,
    borderColor: colors.actionGreen,
    borderRadius: 50,
  },
  slideIndexContainer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    width: '100%'
  },
  slideIndex: {
    width: 7,
    height: 7,
    borderWidth: 1.5,
    borderColor: '#fff',
    borderRadius: 50
  },
  activeSlideIndex: {
    backgroundColor: colors.actionGreen,
    borderColor: colors.actionGreen,
    width: 20
  }
})

export default styles
import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  heading: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 20,
    lineHeight: 18,
    textAlign: 'center',
    color: COLORS.orangeBase,
  },
  mainContainer: {
    flex: 1,
    gap: 20,
  },
  recommendedList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  foodItemContainer: {
    width: '48%',
    marginBottom: 15,
  },
  foodItem: {
    position: 'relative',
  },
  recommendedImage: {
    width: '100%',
    height: 140,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  priceContainer: {
    position: 'absolute',
    backgroundColor: COLORS.orangeBase,
    right: 0,
    bottom: 12,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 4,
  },
  priceText: {
    color: COLORS.lightWhite,
  },
  catogoryContainer: {
    position: 'absolute',
    backgroundColor: COLORS.lightWhite,
    left: 10,
    top: 8,
    padding: 5,
    borderRadius: 10,
  },
  catogoryImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  heartContainer: {
    position: 'absolute',
    backgroundColor: COLORS.lightWhite,
    right: 10,
    top: 10,
    padding: 5,
    borderRadius: 10,
  },
  heartImage: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    marginTop: 10,
  },
  title: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 16,
    lineHeight: 14,
    color: COLORS.dark,
    maxWidth: '68%',
    overflow: 'hidden',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: COLORS.orangeBase,
    borderRadius: 30,
    paddingHorizontal: 5,
  },
  rating: {
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 12,
    color: COLORS.lightWhite,
  },
  star: {
    width: 9,
    height: 9,
    resizeMode: 'contain',
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  description: {
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 12,
    lineHeight: 11,
    color: COLORS.dark,
    maxWidth: '90%',
    overflow: 'hidden',
  },
  cartContainer: {
    backgroundColor: COLORS.orangeBase,
    width: 20,
    height: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cart: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    tintColor: COLORS.lightWhite,
  },
});

export default styles;

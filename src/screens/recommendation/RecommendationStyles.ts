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
    gap: 10,
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
  ratingContainer: {
    position: 'absolute',
    left: 10,
    bottom: 10,
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
  infoContainer: {
    gap: 4,
  },
  title: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 16,
    lineHeight: 14,
    color: COLORS.dark,
  },
  description: {
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 12,
    lineHeight: 11,
    color: COLORS.dark,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceText: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 20,
    lineHeight: 18,
    color: COLORS.orangeBase,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  quantityButton: {
    backgroundColor: COLORS.orangeBase,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 12,
    width: 12,
  },
  quantityIcon: {
    width: 5,
    height: 5,
  },
  quantityText: {
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 15,
    lineHeight: 14,
    color: COLORS.dark,
  },
  cartContainer: {
    backgroundColor: COLORS.orangeBase,
    width: 18,
    height: 18,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cart: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
    tintColor: COLORS.lightWhite,
  },
});

export default styles;

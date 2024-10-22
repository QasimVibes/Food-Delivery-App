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
  topContainer: {
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: COLORS.light,
    flex: 1,
  },
  categoriesContainer: {
    paddingHorizontal: 35,
    paddingTop: 15,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.light,
  },
  category: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    height: 93,
    width: '20%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 49,
    height: 62,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: 30,
  },
  iconStyle: {
    height: 37,
    width: 37,
    resizeMode: 'contain',
  },
  categoryText: {
    fontSize: 12,
    color: COLORS.lightDark,
    fontFamily: 'LeagueSpartan-Regular',
    lineHeight: 15,
  },

  bestSellerHeader: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bestSellerTitle: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 20,
    color: COLORS.dark,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },
  viewAllText: {
    fontFamily: 'LeagueSpartan-SemiBold',
    color: COLORS.orangeBase,
  },
  rotatedGoBackIcon: {
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },
  bestSellerContainer: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  foodItem: {
    position: 'relative',
  },
  recommendedImage: {
    width: 160,
    height: 140,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  bestSellerImage: {
    width: 70,
    height: 100,
    borderRadius: 19,
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
  carouselContainer: {
    marginVertical: 20,
  },
  recommendedTitle: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 20,
    color: COLORS.dark,
  },
  recommendedList: {
    flexDirection: 'row',
    gap: 7,
    paddingVertical: 9,
  },
});

export default styles;

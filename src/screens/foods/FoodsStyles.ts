import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  topContainer: {
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: COLORS.light,
    flex: 1,
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
    paddingTop: 1,
    fontSize: 12,
    color: COLORS.lightDark,
    fontFamily: 'LeagueSpartan-Regular',
    lineHeight: 15,
  },
  activeCategoryBackground: {
    width: 123,
    height: 94,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterContainerLeftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  categoriesContainer: {
    paddingHorizontal: 35,
    paddingTop: 15,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    flexDirection: 'row',
    backgroundColor: COLORS.orangeBase,
    justifyContent: 'space-between',
  },
  foodsContainer: {
    flexGrow: 1,
    paddingTop: 22,
    paddingHorizontal: 35,
  },
  lightFont: {
    fontSize: 12,
    fontFamily: 'LeagueSpartan-Light',
  },
  searchButton: {
    backgroundColor: COLORS.orangeBase,
    width: 20,
    height: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    width: 11,
    height: 7,
    resizeMode: 'contain',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyMessage: {
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 16,
    color: COLORS.dark,
  },
  foodCard: {
    marginBottom: 15,
  },
  imageContainer: {
    marginTop: 16,
  },
  foodImage: {
    width: '100%',
    height: 200,
    borderRadius: 36,
  },

  belowImageContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 18,
    color: COLORS.orangeBase,
  },
  dot: {
    height: 5,
    width: 5,
    backgroundColor: COLORS.orangeBase,
    borderRadius: 2.5,
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
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },
  name: {
    fontFamily: 'LeagueSpartan-SemiBold',
    fontSize: 18,
    lineHeight: 20,
    color: COLORS.dark,
    maxWidth: 200,
    overflow: 'hidden',
  },
  description: {
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.dark,
  },
  line: {
    borderBottomColor: COLORS.lightOrange,
    borderBottomWidth: 1,
    marginTop: 25,
  },
});

import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    height: '20%',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    color: COLORS.dark,
    fontFamily: 'LeagueSpartan-Bold',
    fontSize: 20,
  },
  icon: {
    width: 5,
    height: 5,
    backgroundColor: COLORS.orangeBase,
    borderRadius: 5,
  },
  imageContainer: {
    backgroundColor: COLORS.orangeBase,
    width: 22,
    height: 22,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 10,
    height: 10,
  },
  ratingContainer: {
    marginTop: 5,
    marginLeft: 20,
  },
  ratingRow: {
    backgroundColor: COLORS.orangeBase,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 30,
    alignSelf: 'flex-start',
  },
  star: {
    width: 9,
    height: 9,
  },
  rating: {
    fontSize: 12,
    fontFamily: 'LeagueSpartan-Regular',
    color: COLORS.light,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  foodImage: {
    width: '100%',
    height: 200,
    borderRadius: 36,
  },
  priceContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: COLORS.lightOrange,
    borderBottomWidth: 1,
  },
  price: {
    fontFamily: 'LeagueSpartan-Bold',
    fontSize: 24,
    lineHeight: 26,
    color: COLORS.orangeBase,
    paddingBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingBottom: 10,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  quantityButton: {
    backgroundColor: COLORS.orangeBase,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 21,
    width: 21,
  },
  quantityIcon: {
    width: 10,
    height: 10,
  },
  quantityText: {
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 24,
    lineHeight: 22,
    color: COLORS.dark,
  },
  detailContainer: {
    gap: 30,
  },
  descriptionContainer: {
    marginTop: 18,
    gap: 7,
  },
  mainTitle: {
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 16,
    lineHeight: 14,
    color: COLORS.dark,
  },
  description: {
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 16,
    lineHeight: 15,
    color: COLORS.dark,
  },
  toppingsContainer: {
    gap: 15,
  },
  toppingsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  toppingName: {
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 14,
    color: COLORS.dark,
    marginBottom: 2,
  },
  dottedLine: {
    flexGrow: 1,
    height: 1,
    borderBottomColor: COLORS.lightOrange,
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    marginHorizontal: 8,
  },
  toppingPrice: {
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 12,
    color: COLORS.dark,
  },
  outerCheckbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: COLORS.orangeBase,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    width: 12,
    height: 12,
    borderRadius: 10,
    borderColor: COLORS.orangeBase,
    borderWidth: 1,
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 180,
    height: 35,
    borderRadius: 40,
    backgroundColor: COLORS.orangeBase,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
  },
  buttonImage: {
    width: 16,
    height: 16,
  },
  buttonText: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 20,
    lineHeight: 22,
    color: COLORS.light,
  },
});

export default styles;

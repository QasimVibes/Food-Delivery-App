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
  addressContainer: {
    gap: 23,
  },
  shippingAddressContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  shippingAddress: {
    fontFamily: 'LeagueSpartan-Bold',
    fontSize: 24,
    lineHeight: 26,
    color: COLORS.dark,
  },
  editIcon: {
    width: 12,
    height: 12,
    alignSelf: 'center',
  },
  addressSection: {
    padding: 12,
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
  },
  address: {
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 14,
    lineHeight: 16,
    color: COLORS.dark,
  },
  order: {
    marginTop: 30,
  },
  orderSummaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderSummary: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 20,
    lineHeight: 18,
    color: COLORS.dark,
  },
  editButton: {
    backgroundColor: COLORS.orangeLight,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    width: 60,
  },
  edit: {
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 12,
    lineHeight: 12,
    color: COLORS.orangeBase,
    textAlign: 'center',
  },
  itemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
    borderBottomColor: COLORS.lightOrange,
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  itemsWrapper: {
    gap: 5,
  },
  items: {
    flexDirection: 'row',
    gap: 15,
  },
  itemName: {
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 14,
    color: COLORS.dark,
    lineHeight: 14,
  },
  itemQuantity: {
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 14,
    color: COLORS.orangeBase,
    lineHeight: 14,
  },
  total: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 20,
    lineHeight: 18,
    color: COLORS.dark,
  },
  paymentContainer: {
    paddingVertical: 15,
    borderBottomColor: COLORS.lightOrange,
    borderBottomWidth: 1,
  },
  paymentSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  paymentImage: {
    width: 31,
    height: 31,
    resizeMode: 'contain',
  },
  paymentAddress: {
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    padding: 5,
  },
  paymentText: {
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 14,
    color: COLORS.dark,
    lineHeight: 14,
    maxWidth: 160,
  },
  deliveryContainer: {
    paddingTop: 20,
    paddingBottom: 15,
    borderBottomColor: COLORS.lightOrange,
    borderBottomWidth: 1,
  },
  timeText: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 20,
    color: COLORS.orangeBase,
    lineHeight: 18,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    width: 157,
    height: 38,
    backgroundColor: COLORS.lightOrange,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 18,
    color: COLORS.orangeBase,
  },
});

export default styles;

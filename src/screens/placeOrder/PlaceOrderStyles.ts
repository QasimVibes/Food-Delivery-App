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
  orderContainer: {
    borderBottomColor: COLORS.lightOrange,
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  orderCard: {
    borderTopColor: COLORS.lightOrange,
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  orderImageStyle: {
    width: 71,
    height: 108,
    borderRadius: 20,
  },
  orderTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  deleteIconContainer: {
    marginBottom: 15,
  },
  deleteIcon: {
    width: 9,
    height: 12,
    alignSelf: 'flex-end',
  },
  orderNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderName: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 20,
    lineHeight: 18,
    color: COLORS.dark,
  },
  orderPrice: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 20,
    lineHeight: 18,
    color: COLORS.orangeBase,
  },
  orderDetailsContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderDetails: {
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 14,
    lineHeight: 14,
    color: COLORS.dark,
  },
  orderButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: COLORS.lightOrange,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 26,
  },

  cancelText: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 14,
    color: COLORS.orangeBase,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  quantityButton: {
    backgroundColor: COLORS.orangeBase,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    width: 20,
  },
  quantityIcon: {
    width: 10,
    height: 10,
  },
  quantityText: {
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 17,
    lineHeight: 16,
    color: COLORS.dark,
  },
  totalAmount: {
    gap: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  total: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 20,
    lineHeight: 18,
    color: COLORS.dark,
  },
  line: {
    borderBottomColor: COLORS.orangeLight,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default styles;

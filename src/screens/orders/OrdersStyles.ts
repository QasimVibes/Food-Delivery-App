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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: 400,
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
  },
  noOrderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 140,
    height: 167,
    marginVertical: 20,
  },
  noOrdersText: {
    color: COLORS.orangeBase,
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 30,
    lineHeight: 27,
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
    backgroundColor: COLORS.orangeBase,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  cancelText: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 14,
    color: COLORS.lightWhite,
  },
  trackButton: {
    backgroundColor: COLORS.lightOrange,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  trackText: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 14,
    color: COLORS.orangeBase,
  },
});

export default styles;

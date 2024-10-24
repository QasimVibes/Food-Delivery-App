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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightOrange,
    paddingVertical: 25,
  },
  image: {
    width: 31,
    height: 27,
    resizeMode: 'contain',
  },
  textContainer: {
    width: '70%',
    gap: 5,
  },
  title: {
    color: COLORS.dark,
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 20,
    lineHeight: 18,
  },
  address: {
    color: COLORS.dark,
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 14,
    lineHeight: 14,
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
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: COLORS.orangeLight,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 17,
    lineHeight: 20,
    color: COLORS.orangeBase,
  },
});

export default styles;

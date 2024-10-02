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
  termsText: {
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 12,
    lineHeight: 11,
    color: COLORS.lightDark,
    textAlign: 'center',
    marginVertical: 5,
  },
  termsLink: {
    color: COLORS.orangeBase,
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 12,
    lineHeight: 11,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  signUpContainer: {
    alignItems: 'center',
    marginTop: 9,
    gap: 9,
  },
  signUpText: {
    color: COLORS.lightDark,
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 14,
    lineHeight: 14,
    textAlign: 'center',
  },
  signUpButtonContainer: {
    flexDirection: 'row',
    gap: 17,
  },
  loginLink: {
    color: COLORS.orangeBase,
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 14,
    lineHeight: 14,
    textAlign: 'center',
  },
});

export default styles;

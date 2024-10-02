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
  textContainer: {
    gap: 10,
    marginBottom: 20,
  },
  mainText: {
    color: COLORS.dark,
    fontFamily: 'LeagueSpartan-SemiBold',
    fontSize: 24,
  },
  subText: {
    color: COLORS.lightDark,
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 14,
    lineHeight: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    color: COLORS.orangeBase,
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 14,
    textAlign: 'right',
    marginTop: -5,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  signUpContainer: {
    alignItems: 'center',
    marginTop: 25,
    gap: 19,
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
  signUpLink: {
    color: COLORS.orangeBase,
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 14,
    lineHeight: 14,
    textAlign: 'center',
  },
});

export default styles;

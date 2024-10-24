import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.orangeBase,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  logo: {
    width: 202,
    height: 257,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    maxWidth: 300,
  },
  title: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 14,
    lineHeight: 14,
    textAlign: 'center',
    color: COLORS.lightWhite,
  },
  buttonContainer: {
    gap: 5,
    alignItems: 'center',
  },
  button: {
    backgroundColor: COLORS.primary,
    width: 207,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  buttonText: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 24,
    lineHeight: 22,
    textAlign: 'center',
    color: COLORS.orangeBase,
  },
});

export default styles;

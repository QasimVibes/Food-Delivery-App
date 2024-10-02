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
    justifyContent: 'flex-end',
    paddingBottom: 20,
    flex: 1,
  },
});

export default styles;

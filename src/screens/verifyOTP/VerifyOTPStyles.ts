import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  mainText: {
    color: COLORS.lightDark,
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 14,
    lineHeight: 14,
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    width: '80%',
    maxWidth: 300,
    gap: 10,
    alignSelf: 'center',
  },
  otpInput: {
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    color: COLORS.lightDark,
    fontFamily: 'LeagueSpartan-Light',
    borderRadius: 5,
    backgroundColor: COLORS.secondary,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingVertical: 50,
  },
});

export default styles;

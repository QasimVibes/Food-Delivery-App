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
  mainText: {
    color: COLORS.lightDark,
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 14,
    lineHeight: 14,
    marginBottom: 30,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingVertical: 50,
  },
});

export default styles;

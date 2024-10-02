import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.orangeBase,
    borderRadius: 30,
    width: '60%',
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.lightWhite,
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 22,
    lineHeight: 28,
    textAlign: 'center',
  },
});

export default styles;

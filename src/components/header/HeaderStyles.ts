import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

const styles = StyleSheet.create({
  header: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    color: COLORS.lightWhite,
    fontFamily: 'LeagueSpartan-Bold',
    fontSize: 28,
    textAlign: 'center',
    flex: 1,
  },
  subTitle: {
    color: COLORS.orangeBase,
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 16,
    lineHeight: 14,
    textAlign: 'center',
  },
});

export default styles;

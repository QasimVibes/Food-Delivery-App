import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

const styles = StyleSheet.create({
  tab: {
    backgroundColor: COLORS.orangeLight,
    borderRadius: 38,
    paddingTop: 6.5,
    paddingBottom: 4.5,
    paddingHorizontal: 10,
  },
  tabText: {
    color: COLORS.orangeBase,
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'center',
  },
  tabActive: {
    backgroundColor: COLORS.orangeBase,
  },
  tabTextActive: {
    color: COLORS.lightWhite,
  },
});

export default styles;

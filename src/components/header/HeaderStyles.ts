import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

const styles = StyleSheet.create({
  header: {
    height: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.primary,
  },
  title: {
    color: COLORS.lightWhite,
    fontFamily: 'LeagueSpartan-Bold',
    fontSize: 28,
    textAlign: 'center',
    flex: 1,
  },
});

export default styles;

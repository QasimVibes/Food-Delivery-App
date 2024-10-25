import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    height: 150,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.primary,
  },
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 29,
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 7,
    justifyContent: 'center',
  },
  image: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    tintColor: COLORS.orangeBase,
  },
  button: {
    backgroundColor: COLORS.lightWhite,
    width: 26,
    height: 26,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  greetingText: {
    color: COLORS.lightWhite,
    fontFamily: 'LeagueSpartan-SemiBold',
    fontSize: 30,
    lineHeight: 27,
    marginBottom: 5,
  },
  text: {
    color: COLORS.orangeBase,
    fontSize: 13,
    fontFamily: 'LeagueSpartan-Medium',
    lineHeight: 11,
  },
});

export default styles;

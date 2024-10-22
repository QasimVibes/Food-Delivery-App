import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  itemContainer: {
    width: width,
    height: 130,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  leftContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.orangeBase,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    position: 'relative',
    gap: 10,
    overflow: 'hidden',
    paddingHorizontal: 5,
  },
  text: {
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 16,
    lineHeight: 14,
    color: COLORS.lightWhite,
    textAlign: 'center',
  },
  subText: {
    fontFamily: 'LeagueSpartan-Bold',
    fontSize: 28,
    lineHeight: 26,
    color: COLORS.lightWhite,
    textAlign: 'center',
  },
  rightContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  circleImageOne: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  circleImageTwo: {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: [{rotate: '180deg'}],
  },
  paginationContainer: {
    position: 'absolute',
    bottom: -15,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 20,
    height: 4,
    borderRadius: 12,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: COLORS.orangeBase,
  },
  inActiveDot: {
    backgroundColor: COLORS.orangeLight,
  },
});

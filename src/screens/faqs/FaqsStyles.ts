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
  mainContainer: {
    gap: 30,
  },
  mainButtonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 12,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    width: '32%',
    height: 30,
    backgroundColor: COLORS.lightOrange,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 17,
    lineHeight: 23,
    color: COLORS.orangeBase,
  },
  accordion: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: COLORS.lightOrange,
    paddingVertical: 16,
  },
  accordionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accordionTitle: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 20,
    lineHeight: 18,
    color: COLORS.orangeBase,
    width: '80%',
  },
  arrow: {
    width: 8,
    height: 13,
    resizeMode: 'contain',
    transform: [{rotate: '270deg'}],
  },
  accordionContent: {
    marginTop: 10,
  },
  accordionText: {
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 14,
    lineHeight: 14,
    color: COLORS.lightDark,
  },
});

export default styles;

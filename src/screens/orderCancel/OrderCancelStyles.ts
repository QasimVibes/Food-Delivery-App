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
  textContainer: {
    paddingVertical: 15,
  },
  mainText: {
    color: COLORS.dark,
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 14,
    lineHeight: 14,
  },
  detailsContainer: {
    borderBottomColor: COLORS.lightOrange,
    borderBottomWidth: 1,
  },
  detailsTextContainer: {
    borderTopColor: COLORS.lightOrange,
    borderTopWidth: 1,
    paddingVertical: 15,
  },
  textAndCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  outerCheckbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: COLORS.orangeBase,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    width: 12,
    height: 12,
    borderRadius: 10,
    borderColor: COLORS.orangeBase,
    borderWidth: 1,
  },
  detailsText: {
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 15,
    lineHeight: 13,
    color: COLORS.dark,
    maxWidth: 200,
  },
  otherDetailsContainer: {
    marginTop: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
});

export default styles;

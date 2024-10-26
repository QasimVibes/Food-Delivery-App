import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

const styles = StyleSheet.create({
  dropdownContainer: {
    marginBottom: 20,
  },
  label: {
    color: COLORS.dark,
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 18,
    marginBottom: 8,
  },
  inputField: {
    backgroundColor: COLORS.secondary,
    borderRadius: 13,
    padding: 14,
  },
  inputText: {
    color: COLORS.dark,
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: COLORS.lightBlack,
  },
  modalContent: {
    backgroundColor: COLORS.light,
    width: '100%',
  },
  optionButton: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightOrange,
  },
  optionText: {
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 16,
    color: COLORS.dark,
  },
});

export default styles;

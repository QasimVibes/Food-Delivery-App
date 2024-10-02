import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

const styles = StyleSheet.create({
  inputField: {
    marginBottom: 15,
  },
  inputText: {
    color: COLORS.dark,
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    color: COLORS.dark,
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 18,
    backgroundColor: COLORS.secondary,
    borderRadius: 13,
    padding: 12,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default styles;

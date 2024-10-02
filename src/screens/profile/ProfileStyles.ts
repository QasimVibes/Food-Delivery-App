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
  imageContainer: {
    alignItems: 'center',
  },
  imageStyle: {
    width: 127,
    height: 127,
    borderRadius: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 20,
    flex: 1,
  },
});

export default styles;

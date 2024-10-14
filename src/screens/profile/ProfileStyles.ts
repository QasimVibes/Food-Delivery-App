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
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 30,
  },
  imageStyle: {
    width: 127,
    height: 127,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: -10,
    right: -10,
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.orangeBase,
  },
  cameraIcon: {
    width: 17,
    height: 15,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 20,
    flex: 1,
  },
});

export default styles;

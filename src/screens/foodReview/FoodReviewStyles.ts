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
    flex: 1,
    alignItems: 'center',
    gap: 30,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  imageWrapper: {
    width: 157,
    height: 157,
    borderRadius: 30,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontFamily: 'LeagueSpartan-Bold',
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center',
    color: COLORS.dark,
  },
  text: {
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center',
    color: COLORS.dark,
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  star: {
    width: 33,
    height: 33,
    resizeMode: 'contain',
  },
  inputContainer: {
    width: '100%',
    gap: 7,
  },
  input: {
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 18,
    padding: 12,
    color: COLORS.dark,
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    width: '48%',
    height: 30,
    backgroundColor: COLORS.orangeLight,
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
});

export default styles;

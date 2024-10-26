import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  image: {
    width: 140,
    height: 140,
    maxWidth: '100%',
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    maxWidth: 300,
  },
  title: {
    fontFamily: 'LeagueSpartan-Bold',
    fontSize: 24,
    lineHeight: 29,
    color: COLORS.dark,
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    color: COLORS.dark,
  },
  backToHome: {
    fontFamily: 'LeagueSpartan-Medium',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    color: COLORS.orangeBase,
  },
  termsContainer: {
    paddingHorizontal: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  termsText: {
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    color: COLORS.dark,
  },
});

export default styles;

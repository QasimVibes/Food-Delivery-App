import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: 'white',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 4,
    flex: 1,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 0,
  },
  searchButton: {
    backgroundColor: COLORS.orangeBase,
    width: 20,
    height: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    width: 11,
    height: 7,
    resizeMode: 'contain',
  },
});

export default styles;

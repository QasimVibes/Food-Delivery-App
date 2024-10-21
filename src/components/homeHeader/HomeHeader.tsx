import {Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import {
  PERSON,
  BELL,
  ORANGE_BAG,
  SEARCH_FILTER,
  CART,
} from '../../constants/Images';
import {COLORS} from '../../constants/Colors';
import styles from './HomeHeaderStyles';

const HomeHeader = ({greetingShown}: {greetingShown?: boolean}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchInput}
            placeholderTextColor={COLORS.lightBlack}
            placeholder="Search"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Image source={SEARCH_FILTER} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.button}>
            <Image
              source={greetingShown ? CART : ORANGE_BAG}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={BELL} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={PERSON} style={styles.image} />
          </TouchableOpacity>
        </View>
      </View>
      {greetingShown && (
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Good Morning</Text>
          <Text style={styles.text}>Rise and Shine! It's Breakfast Time</Text>
        </View>
      )}
    </View>
  );
};

export default HomeHeader;

import {Text, TouchableOpacity, View, Image} from 'react-native';
import {PERSON, BELL, BAG, CART} from '../../constants/Images';
import styles from './HomeHeaderStyles';
import {HomeHeaderProps} from '../../types/types';
import SearchBox from '../searchBox/SearchBox';

const HomeHeader = ({greetingShown}: HomeHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <SearchBox />
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.button}>
            <Image source={greetingShown ? CART : BAG} style={styles.image} />
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

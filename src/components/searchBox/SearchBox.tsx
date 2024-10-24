import React from 'react';
import {COLORS} from '../../constants/Colors';
import styles from './SearchBoxStyles';
import {SEARCH_FILTER} from '../../constants/Images';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';

const SearchBox = () => {
  return (
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
  );
};

export default SearchBox;

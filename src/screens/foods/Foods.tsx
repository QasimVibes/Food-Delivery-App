import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/Colors';
import HomeHeader from '../../components/homeHeader/HomeHeader';
import {styles} from './FoodsStyles';
import {FOOD, SEARCH_FILTER, STAR} from '../../constants/Images';
import {CATEGORIES} from '../../constants/Constants';

const Foods = () => {
  const data: any = [1, 2, 3]; // Future data array
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <View style={styles.topContainer}>
        <View style={styles.categoriesContainer}>
          {CATEGORIES?.map((item, index) => (
            <TouchableOpacity style={styles.category} key={index}>
              <View style={styles.button}>
                <View style={styles.iconContainer}>
                  <Image source={item?.icon} style={styles.iconStyle} />
                </View>
                <Text style={styles.categoryText}>{item?.label}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.foodsContainer}>
            <View style={styles.filterContainer}>
              <View style={styles.filterContainerLeftContent}>
                <Text style={[styles.lightFont, {color: COLORS.lightDark1}]}>
                  Sort by
                </Text>
                <Text style={[styles.lightFont, {color: COLORS.orangeBase}]}>
                  Popular
                </Text>
              </View>
              <TouchableOpacity style={styles.searchButton}>
                <Image source={SEARCH_FILTER} style={styles.searchIcon} />
              </TouchableOpacity>
            </View>

            <FlatList
              data={data}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <View style={styles.emptyContainer}>
                  <Text style={styles.emptyMessage}>No data available</Text>
                </View>
              }
              renderItem={({item}) => (
                <TouchableOpacity style={styles.foodCard}>
                  <View style={styles.imageContainer}>
                    <Image source={FOOD} style={styles.foodImage} />
                  </View>
                  <View style={styles.belowImageContainer}>
                    <View style={styles.nameContainer}>
                      <Text
                        style={styles.name}
                        numberOfLines={1}
                        ellipsizeMode="tail">
                        {item.name || 'Prawn Ceviche'}
                      </Text>
                      <View style={styles.dot} />
                      <View style={styles.ratingContainer}>
                        <Text style={styles.rating}>
                          {item.rating || '4.5'}
                        </Text>
                        <Image source={STAR} style={styles.star} />
                      </View>
                    </View>
                    <Text style={styles.price}>{item.price || '$12.00'}</Text>
                  </View>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={styles.description}>
                    {item.description ||
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                  </Text>
                  <View style={styles.line} />
                </TouchableOpacity>
              )}
              contentContainerStyle={{
                flexGrow: 1,
              }}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Foods;

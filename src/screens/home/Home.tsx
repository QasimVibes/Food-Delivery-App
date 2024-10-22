import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import HomeHeader from '../../components/homeHeader/HomeHeader';
import {CATEGORIES} from '../../constants/Constants';
import styles from './HomeStyles';
import GoBack from '../../components/goBack/GoBack';
import {FOOD} from '../../constants/Images';
import Container from '../../components/container/Container';
import Carousel from '../../components/carousel/Carousel';

const Home = () => {
  const bestSeller = [1, 2, 3, 4, 5, 6];
  const recommended = [1, 2, 3, 4];

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader greetingShown />

      <ScrollView style={styles.scrollContainer}>
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

          <Container style={{padding: 0, paddingHorizontal: 20}}>
            <View style={styles.bestSellerHeader}>
              <Text style={styles.bestSellerTitle}>Best Seller</Text>
              <TouchableOpacity style={styles.viewAllButton}>
                <Text style={styles.viewAllText}>View All</Text>
                <View style={styles.rotatedGoBackIcon}>
                  <GoBack />
                </View>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.bestSellerContainer}>
                {bestSeller?.map((item, index) => (
                  <TouchableOpacity key={index}>
                    <View style={styles.foodItem}>
                      <Image source={FOOD} style={styles.bestSellerImage} />
                      <View style={styles.priceContainer}>
                        <Text style={styles.priceText}>$ 1.99</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </Container>
          <View style={styles.carouselContainer}>
            <Carousel />
          </View>

          <Container style={{padding: 0, paddingHorizontal: 20}}>
            <Text style={styles.recommendedTitle}>Recommended</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.recommendedList}>
                {recommended?.map((item, index) => (
                  <TouchableOpacity key={index}>
                    <View style={styles.foodItem}>
                      <Image source={FOOD} style={styles.recommendedImage} />
                      <View style={styles.priceContainer}>
                        <Text style={styles.priceText}>$ 1.99</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </Container>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './RecommendationStyles';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import {CART, DRINK, FOOD, MINUS, PLUS, STAR} from '../../constants/Images';
import {COLORS} from '../../constants/Colors';

const Recommendation = () => {
  const recommended = [1, 2, 3, 4, 5, 6];
  return (
    <View style={styles.container}>
      <Header title="Recommendations" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Container>
          <View style={styles.mainContainer}>
            <Text style={styles.heading}>
              Discover the dishes recommended by the chef.
            </Text>
            <View style={styles.recommendedList}>
              {recommended?.map((item, index) => (
                <TouchableOpacity key={index} style={styles.foodItemContainer}>
                  <View style={styles.foodItem}>
                    <Image source={FOOD} style={styles.recommendedImage} />
                    <View style={styles.catogoryContainer}>
                      <Image source={DRINK} style={styles.catogoryImage} />
                    </View>
                    <View style={styles.ratingContainer}>
                      <Text style={styles.rating}>4.5</Text>
                      <Image source={STAR} style={styles.star} />
                    </View>
                  </View>
                  <View style={styles.infoContainer}>
                    <Text
                      style={styles.title}
                      numberOfLines={2}
                      ellipsizeMode="tail">
                      Bean and vegetable burger
                    </Text>
                    <Text
                      style={styles.description}
                      numberOfLines={2}
                      ellipsizeMode="tail">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </Text>
                  </View>
                  <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>$15.99</Text>
                    <View style={styles.quantity}>
                      <TouchableOpacity
                        style={[
                          styles.quantityButton,
                          {backgroundColor: COLORS.orangeLight},
                        ]}>
                        <Image
                          source={MINUS}
                          style={styles.quantityIcon}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                      <Text style={styles.quantityText}>1</Text>
                      <TouchableOpacity style={styles.quantityButton}>
                        <Image
                          source={PLUS}
                          style={styles.quantityIcon}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                      <View style={styles.cartContainer}>
                        <Image source={CART} style={styles.cart} />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Container>
      </ScrollView>
    </View>
  );
};

export default Recommendation;

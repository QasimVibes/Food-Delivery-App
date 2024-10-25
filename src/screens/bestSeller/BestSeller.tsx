import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './BestSellerStyles';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import {CART, DRINK, FILL_HEART, FOOD, STAR} from '../../constants/Images';

const BestSeller = () => {
  const recommended = [1, 2, 3, 4, 5, 6];
  return (
    <View style={styles.container}>
      <Header title="Best Seller" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Container>
          <View style={styles.mainContainer}>
            <Text style={styles.heading}>
              Discover our most popular dishes!
            </Text>
            <View style={styles.recommendedList}>
              {recommended?.map((item, index) => (
                <TouchableOpacity key={index} style={styles.foodItemContainer}>
                  <View style={styles.foodItem}>
                    <Image source={FOOD} style={styles.recommendedImage} />
                    <View style={styles.priceContainer}>
                      <Text style={styles.priceText}>$ 1.99</Text>
                    </View>
                    <View style={styles.catogoryContainer}>
                      <Image source={DRINK} style={styles.catogoryImage} />
                    </View>
                    <View style={styles.heartContainer}>
                      <Image source={FILL_HEART} style={styles.heartImage} />
                    </View>
                  </View>
                  <View style={styles.infoContainer}>
                    <Text
                      style={styles.title}
                      numberOfLines={2}
                      ellipsizeMode="tail">
                      Fresh Prawn Ceviche Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Cumque deserunt eligendi, ipsum sit,
                      ullam aliquam unde nam quas excepturi exercitationem neque
                      minus rerum atque a! Nemo, facilis? Eaque, dolore optio?
                    </Text>
                    <View style={styles.ratingContainer}>
                      <Text style={styles.rating}>4.5</Text>
                      <Image source={STAR} style={styles.star} />
                    </View>
                  </View>
                  <View style={styles.descriptionContainer}>
                    <Text
                      style={styles.description}
                      numberOfLines={2}
                      ellipsizeMode="tail">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deleniti dolore molestias labore veniam explicabo saepe
                      illum, autem, praesentium voluptatum ea tempora vitae!
                      Consectetur libero consequatur numquam neque hic nemo
                      earum!
                    </Text>
                    <View style={styles.cartContainer}>
                      <Image source={CART} style={styles.cart} />
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

export default BestSeller;

import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import GoBack from '../../components/goBack/GoBack';
import {
  BADGE,
  BAG,
  FOOD,
  HEART,
  MINUS,
  PLUS,
  STAR,
} from '../../constants/Images';
import Container from '../../components/container/Container';
import styles from './DiscountedStyles';

const Discounted = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <GoBack />
          <View style={styles.headerContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                Pizza with Pepperoni and Cheese
              </Text>
              <View style={styles.icon} />
            </View>
            <View style={styles.imageContainer}>
              <Image source={HEART} style={styles.image} />
            </View>
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>4.5</Text>
            <Image source={STAR} style={styles.star} />
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Container>
          <View style={styles.foodImageContainer}>
            <Image source={FOOD} style={styles.foodImage} />
            <View style={styles.badgeContainer}>
              <Image source={BADGE} style={styles.badge} />
              <Text
                style={styles.badgeText}
                numberOfLines={1}
                ellipsizeMode="tail">
                -30%
              </Text>
            </View>
          </View>
          <View style={styles.priceContainer}>
            <View style={styles.priceSection}>
              <Text style={styles.price}>$50.00</Text>
              <Text style={styles.oldPrice}>$60.00</Text>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.quantityButton}>
                <Image source={MINUS} style={styles.quantityIcon} />
              </TouchableOpacity>
              <Text style={styles.quantityText}>2</Text>
              <TouchableOpacity style={styles.quantityButton}>
                <Image source={PLUS} style={styles.quantityIcon} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.detailContainer}>
            <View style={styles.descriptionContainer}>
              <Text style={styles.mainTitle}>Lorem ipsum dolor sit amet</Text>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </Text>
            </View>
            <View style={styles.portionContainer}>
              <Text style={styles.portionTitle}>Personal portion</Text>
              <View style={styles.portionRow}>
                <Text
                  style={styles.portionName}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  Personal (4 Slides)
                </Text>
                <View style={styles.dottedDivider} />
                <Text style={styles.portionPrice}>$5.00</Text>
                <View style={styles.checkboxContainer}>
                  <View style={styles.checkboxInner} />
                </View>
              </View>
              <View style={styles.portionRow}>
                <Text
                  style={styles.portionName}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  Medium (8 Slides)
                </Text>
                <View style={styles.dottedDivider} />
                <Text style={styles.portionPrice}>$6.00</Text>
                <View style={styles.checkboxContainer}>
                  <View style={styles.checkboxInner} />
                </View>
              </View>
              <View style={styles.portionRow}>
                <Text
                  style={styles.portionName}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  Familiar (10 Slides)
                </Text>
                <View style={styles.dottedDivider} />
                <Text style={styles.portionPrice}>$8.00</Text>
                <View style={styles.checkboxContainer}>
                  <View style={styles.checkboxInner} />
                </View>
              </View>
              <View style={styles.portionRow}>
                <Text
                  style={styles.portionName}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  Jumbo (12 Slides)
                </Text>
                <View style={styles.dottedDivider} />
                <Text style={styles.portionPrice}>$10.00</Text>
                <View style={styles.checkboxContainer}>
                  <View style={styles.checkboxInner} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Image source={BAG} style={styles.buttonImage} />
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </Container>
      </ScrollView>
    </View>
  );
};

export default Discounted;

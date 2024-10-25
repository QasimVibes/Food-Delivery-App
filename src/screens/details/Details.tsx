import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './DetailsStyles';
import GoBack from '../../components/goBack/GoBack';
import {BAG, FOOD, HEART, MINUS, PLUS, STAR} from '../../constants/Images';
import Container from '../../components/container/Container';

const Details = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <GoBack />
          <View style={styles.headerContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                Fresh Prawn Ceviche
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
          <Image source={FOOD} style={styles.foodImage} />
          <View style={styles.priceContainer}>
            <Text style={styles.price}>$50.00</Text>
            <View style={styles.quantityContainer}>
              <View style={styles.quantity}>
                <TouchableOpacity style={styles.quantityButton}>
                  <Image source={MINUS} style={styles.quantityIcon} />
                </TouchableOpacity>
                <Text style={styles.quantityText}>2</Text>
                <TouchableOpacity style={styles.quantityButton}>
                  <Image source={PLUS} style={styles.quantityIcon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.detailContainer}>
            <View style={styles.descriptionContainer}>
              <Text style={styles.mainTitle}>Tortilla Chips With Toppins</Text>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </Text>
            </View>
            <View style={styles.toppingsContainer}>
              <View style={styles.toppingsRow}>
                <Text style={styles.toppingName}>Shrimp</Text>
                <View style={styles.dottedLine} />
                <Text style={styles.toppingPrice}>$5.00</Text>
                <View style={styles.outerCheckbox}>
                  <View style={styles.checkbox} />
                </View>
              </View>
              <View style={styles.toppingsRow}>
                <Text style={styles.toppingName}>Crisp Onion</Text>
                <View style={styles.dottedLine} />
                <Text style={styles.toppingPrice}>$6.00</Text>
                <View style={styles.outerCheckbox}>
                  <View style={styles.checkbox} />
                </View>
              </View>
              <View style={styles.toppingsRow}>
                <Text style={styles.toppingName}>Sweet Corn</Text>
                <View style={styles.dottedLine} />
                <Text style={styles.toppingPrice}>$3.00</Text>
                <View style={styles.outerCheckbox}>
                  <View style={styles.checkbox} />
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

export default Details;

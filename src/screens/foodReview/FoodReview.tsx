import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import styles from './FoodReviewStyles';
import {BOT_STAR, FOOD} from '../../constants/Images';
import {COLORS} from '../../constants/Colors';

const FoodReview = () => {
  return (
    <View style={styles.container}>
      <Header title="Leave a Review" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Container>
          <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
              <View style={styles.imageWrapper}>
                <Image source={FOOD} style={styles.image} />
              </View>
              <Text style={styles.title}>Chicken Curry</Text>
            </View>
            <View>
              <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">
                We'd love to know what you think of your dish.
              </Text>
            </View>
            <View style={styles.starsContainer}>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <TouchableOpacity key={index}>
                    <Image source={BOT_STAR} style={styles.star} />
                  </TouchableOpacity>
                ))}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>Leave us your comment!</Text>
              <TextInput
                style={styles.input}
                placeholder="Write review..."
                placeholderTextColor={COLORS.lightBlack}
                multiline
                numberOfLines={5}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, {backgroundColor: COLORS.orangeBase}]}>
                <Text style={[styles.buttonText, {color: COLORS.lightWhite}]}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Container>
      </ScrollView>
    </View>
  );
};

export default FoodReview;

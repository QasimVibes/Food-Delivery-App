import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './FaqsStyles';
import Container from '../../components/container/Container';
import Header from '../../components/header/Header';
import {COLORS} from '../../constants/Colors';
import SearchBox from '../../components/searchBox/SearchBox';
import {GO_BACK} from '../../constants/Images';

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <View style={styles.container}>
      <Header title="Help & FAQs" isShown subTitle="how can we help you?" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Container>
          <View style={styles.mainContainer}>
            <View style={styles.mainButtonContainer}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {backgroundColor: COLORS.orangeBase, width: '48%'},
                  ]}>
                  <Text style={[styles.buttonText, {color: COLORS.lightWhite}]}>
                    FAQ
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, {width: '48%'}]}>
                  <Text style={styles.buttonText}>Contact Us</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, {backgroundColor: COLORS.orangeBase}]}>
                  <Text style={[styles.buttonText, {color: COLORS.lightWhite}]}>
                    General
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Services</Text>
                </TouchableOpacity>
              </View>
            </View>
            <SearchBox />
            <View>
              {Array(6)
                .fill(0)
                .map((_, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <View style={styles.accordion} key={index}>
                      <TouchableOpacity
                        style={styles.accordionTitleContainer}
                        onPress={() => toggleAccordion(index)}>
                        <Text
                          style={[
                            styles.accordionTitle,
                            {color: isOpen ? COLORS.dark : COLORS.orangeBase},
                          ]}
                          numberOfLines={1}
                          ellipsizeMode="tail">
                          Lorem ipsum dolor sit amet?
                        </Text>
                        <Image
                          source={GO_BACK}
                          style={[
                            styles.arrow,
                            {
                              transform: [
                                {rotate: isOpen ? '90deg' : '270deg'},
                              ],
                            },
                          ]}
                        />
                      </TouchableOpacity>

                      {isOpen && (
                        <View style={styles.accordionContent}>
                          <Text style={styles.accordionText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Praesent pellentesque congue lorem, vel
                            tincidunt tortor placerat a. Proin ac diam quam.
                            Aenean in sagittis magna, ut feugiat diam.
                          </Text>
                        </View>
                      )}
                    </View>
                  );
                })}
            </View>
          </View>
        </Container>
      </ScrollView>
    </View>
  );
};

export default Faqs;

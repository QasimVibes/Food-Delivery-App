import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './ContactStyles';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import {COLORS} from '../../constants/Colors';
import {GO_BACK} from '../../constants/Images';
import {CONTACT_DATA} from '../../constants/Constants';

const Contact = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <View style={styles.container}>
      <Header title="Contact Us" isShown subTitle="how can we help you?" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Container>
          <View style={styles.mainContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>FAQ</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, {backgroundColor: COLORS.orangeBase}]}>
                <Text style={[styles.buttonText, {color: COLORS.lightWhite}]}>
                  Contact Us
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              {CONTACT_DATA?.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <View style={styles.accordion} key={index}>
                    <TouchableOpacity
                      style={styles.accordionTitleContainer}
                      onPress={() => toggleAccordion(index)}>
                      <View style={styles.titleWithLogo}>
                        <Image source={item?.logo} style={styles.logo} />
                        <Text
                          style={[
                            styles.accordionTitle,
                            {color: isOpen ? COLORS.orangeBase : COLORS.dark},
                          ]}
                          numberOfLines={1}
                          ellipsizeMode="tail">
                          {item?.title}
                        </Text>
                      </View>
                      <Image
                        source={GO_BACK}
                        style={[
                          styles.arrow,
                          {
                            transform: [{rotate: isOpen ? '90deg' : '270deg'}],
                          },
                        ]}
                      />
                    </TouchableOpacity>

                    {isOpen && (
                      <View style={styles.accordionContent}>
                        <Text style={styles.accordionText}>
                          {item?.content}
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

export default Contact;

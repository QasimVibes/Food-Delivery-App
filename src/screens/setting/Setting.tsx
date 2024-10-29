import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './SettingStyles';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import {SETTING_DATA} from '../../constants/Constants';
import {COLORS} from '../../constants/Colors';
import {GO_BACK} from '../../constants/Images';

const Setting = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <View style={styles.container}>
      <Header title="Settings" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Container>
          <View>
            {SETTING_DATA?.map((item, index) => {
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
                      <Text style={styles.accordionText}>{item?.content}</Text>
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        </Container>
      </ScrollView>
    </View>
  );
};

export default Setting;

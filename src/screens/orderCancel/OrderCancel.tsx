import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './OrderCancelStyles';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

const OrderCancel = () => {
  return (
    <View style={styles.container}>
      <Header title="Cancel Order" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Container>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              pellentesque congue lorem, vel tincidunt tortor.
            </Text>
          </View>
          <View style={styles.detailsContainer}>
            {/* Details Map */}
            <View style={styles.detailsTextContainer}>
              <View style={styles.textAndCheckbox}>
                <Text style={styles.detailsText}>
                  Lorem ipsum dolor sit amet
                </Text>
                <View style={styles.outerCheckbox}>
                  <View style={styles.checkbox} />
                </View>
              </View>
            </View>
            <View style={styles.detailsTextContainer}>
              <View style={styles.textAndCheckbox}>
                <Text style={styles.detailsText}>
                  Lorem ipsum dolor sit amet
                </Text>
                <View style={styles.outerCheckbox}>
                  <View style={styles.checkbox} />
                </View>
              </View>
            </View>
            <View style={styles.detailsTextContainer}>
              <View style={styles.textAndCheckbox}>
                <Text style={styles.detailsText}>
                  Lorem ipsum dolor sit amet
                </Text>
                <View style={styles.outerCheckbox}>
                  <View style={styles.checkbox} />
                </View>
              </View>
            </View>
            <View style={styles.detailsTextContainer}>
              <View style={styles.textAndCheckbox}>
                <Text style={styles.detailsText}>
                  Lorem ipsum dolor sit amet
                </Text>
                <View style={styles.outerCheckbox}>
                  <View style={styles.checkbox} />
                </View>
              </View>
            </View>
            <View style={styles.detailsTextContainer}>
              <View style={styles.textAndCheckbox}>
                <Text style={styles.detailsText}>
                  Lorem ipsum dolor sit amet
                </Text>
                <View style={styles.outerCheckbox}>
                  <View style={styles.checkbox} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.otherDetailsContainer}>
            <Input
              placeholder="Others reason...."
              text="Others"
              multiline={true}
              numberOfLines={3}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              text="Submit"
              width={150}
              paddingVertical={14}
              fontSize={17}
            />
          </View>
        </Container>
      </ScrollView>
    </View>
  );
};

export default OrderCancel;

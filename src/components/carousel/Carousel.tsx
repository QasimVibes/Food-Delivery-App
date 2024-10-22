import {
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {styles} from './CarouselStyles';
import {useState} from 'react';
import {CIRCLE, FOOD} from '../../constants/Images';

const {width} = Dimensions.get('window');

const data = [
  {
    id: '1',
    image: FOOD,
    discount: '30% OFF',
    text: 'Experience our delicious new menu',
  },
  {
    id: '2',
    image: FOOD,
    discount: '99% OFF',
    text: 'Try our chef special lorem',
  },
  {id: '3', image: FOOD, discount: '20% OFF', text: 'Get a taste of paradise'},
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = (event: any) => {
    const slideIndex = Math.ceil(event.nativeEvent.contentOffset.x / width);
    if (slideIndex !== currentIndex) {
      setCurrentIndex(slideIndex);
    }
  };

  const renderItem = ({item}: any) => (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image source={CIRCLE} style={styles.circleImageOne} />
        <Image source={CIRCLE} style={styles.circleImageTwo} />
        <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">
          {item.text}
        </Text>
        <Text style={styles.subText} numberOfLines={1} ellipsizeMode="tail">
          {item.discount}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        snapToInterval={width}
        decelerationRate="normal"
        pagingEnabled
      />
      <View style={styles.paginationContainer}>
        {data.map((_, index) => (
          <TouchableOpacity key={index}>
            <View
              style={[
                styles.dot,
                currentIndex === index ? styles.activeDot : styles.inActiveDot,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Carousel;

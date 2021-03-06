import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import Image from 'react-native-fast-image';
const {width, height} = Dimensions.get('window');
interface Props {
  item: any;
  small: any;
}
const CarouselItem: React.FC<Props> = ({item, small}) => {
  return (
    <View
      style={[
        styles.cardView,
        small ? {height: height / 5} : {height: height / 3},
      ]}>
      <Image
        style={[
          styles.image,
          small ? {height: height / 5} : {height: height / 3},
        ]}
        source={{uri: item.url, priority: Image.priority.high}}
        resizeMode={Image.resizeMode.cover}
      />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}> {item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 20,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },

  textView: {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: width - 20,
    // height: height / 3,
    borderRadius: 10,
  },
  itemTitle: {
    color: 'white',
    fontSize: 22,
    shadowColor: '#000',
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5,
  },
  itemDescription: {
    color: 'white',
    fontSize: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default CarouselItem;

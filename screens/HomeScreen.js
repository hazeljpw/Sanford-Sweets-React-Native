import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const data = [
  { title: 'Coffee Beans',
    subtitle: 'Experience an array of distinctive coffee bean seections from various corners of the globe',
    image: require('../assets/images/coffee-intro.jpg') 
  },
  { title: 'Bake Goods',
    subtitle:'Discover variety of pastries and breads from diverse culinary traditions',
    image: require('../assets/images/flour-intro.jpg') }
];

const renderItem = ({ item }) => (
  <View style={styles.carouselItem}>
    <Image source={item.image} style={styles.image} />
    <Text style={{ fontWeight:'bold', fontSize: 13,marginTop:10 }}>
        {item.title}
    </Text>
    <Text style={{ fontSize: 10,marginTop:10 }}>
        {item.subtitle}
    </Text>
  </View>
);

const Homescreen = () => {
  return (
    <ImageBackground
                source={require('../assets/images/background.jpg')}
                style={styles.imageBackground}
            >
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
      />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselItem: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    margin: -10,
    marginTop:20,
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 350,
    marginBottom: 10,
  },
  imageBackground: {
    width: '100%',
    height: '100%', 
},
});

export default Homescreen;

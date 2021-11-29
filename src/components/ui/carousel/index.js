import React, { useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Animated,
  useWindowDimensions, Image
} from 'react-native';

import Label from '../label';
import { Color } from '../../../utils/color';
import ThemeUtils, { responsiveHeight, responsiveWidth } from '../../../utils/themeUtils';


const Carousel = props => {

  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();
  const c_width = windowWidth - responsiveWidth(10)
  
  return (
    <View style={styles.scrollContainer}>
      <ScrollView
        horizontal={true}
        style={[styles.scrollViewStyle, { backgroundColor: '#E0E0E0' }]}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={1}>
        {props.test.map((testimonial, imageIndex) => {

          return (
            <View
              style={{ width: c_width, justifyContent: 'center', alignItems: 'center', paddingVertical: 20 }}
              key={imageIndex}>
              <Image style={{ width: 200, height: 200, borderRadius: 100 }}
                resizeMode="cover"
                source={{ uri: testimonial.uri }}
              />
              <Label align={'center'} mt={10}>{testimonial.name}</Label>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {props.test.map((image, imageIndex) => {
          const width = scrollX.interpolate({
            inputRange: [
              c_width * (imageIndex - 1),
              c_width * imageIndex,
              c_width * (imageIndex + 1),
            ],
            outputRange: [8, 16, 8],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={imageIndex}
              style={[styles.normalDot, { width }]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',

    // height: 200
  },

  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    // paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(1)
  },
});

export default Carousel;

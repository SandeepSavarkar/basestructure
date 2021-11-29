import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Label from '../label';
import styles from './style';
import PropTypes from 'prop-types';
import { responsiveHeight, responsiveWidth } from '../../../utils/themeUtils';
import { Color } from '../../../utils';



const Card = (props) => {
  let cardStyle = [];
  cardStyle.push({
    height: props.height,
    width: props.width,
    marginVertical: props.marginVertical,
    paddingBottom: props.paddinBottom,
    borderRadius: props.borderRadius,
    elevation: props.elevation,
    shadowColor: props.shadowColor,
    shadowOffset: props.shadowOffset,
    shadowOpacity: props.shadowOpacity,
    shadowRadius: props.shadowRadius,
    backgroundColor: props.backgroundColor,
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(2)

  });

  return (
    <View style={[props.containerStyle]}>
      <TouchableOpacity style={[cardStyle, props.style]} onPress={props.onPress}>
        <Label align="center" color={props.labelColor} style={[{ fontWeight: '600' }, props.titleStyle]} small mt={responsiveHeight(1)}> {props.title}</Label>
        <View style={{ alignSelf: 'center' }}>
          <Image style={[styles.img, props.imgstyle]} resizeMode='cover' source={props.img} />
        </View>
        <Label align="center" color={props.labelColor} style={[{ fontWeight: '600' }, props.subTitleStyle]} small mt={responsiveHeight(3)}> {props.subTitle}</Label>
        <Label align="center" color={props.labelColor} style={[{ fontWeight: '600' }, props.description]} small mt={responsiveHeight(1)}> {props.description}</Label>
      </TouchableOpacity>
    </View>
  );
}
Card.defaultProps = {
  height: responsiveHeight(30),
  width: responsiveWidth(40),
  marginVertical: 7,
  paddingBottom: 10,
  borderRadius: 20,
  elevation: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.5,
  shadowRadius: 2,
  shadowColor: '#000',
  backgroundColor: Color.WHITE,
  paddingHorizontal: responsiveWidth(2)
};
Card.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  marginVertical: PropTypes.number,
  paddingBottom: PropTypes.number,
  borderRadius: PropTypes.number,
  elevation: PropTypes.number,
  shadowColor: PropTypes.string,
  shadowOffset: PropTypes.object,
  shadowOpacity: PropTypes.number,
  shadowRadius: PropTypes.number,
  shadowColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  paddingHorizontal: PropTypes.number

};
export default Card
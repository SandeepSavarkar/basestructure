import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Color } from '../../../utils/color';
import styles from './styles';


const GradientButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.main_container, props.style]}
      onPress={props.onPress}>
      <LinearGradient
        colors={[props.color1, props.color2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.button, props.gradientStyle]}>
        <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
export default GradientButton;

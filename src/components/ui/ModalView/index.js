import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Color } from "../../../utils";
import { responsiveHeight, responsiveWidth } from "../../../utils/themeUtils";
import Button from "../button";
import Label from "../label";
import { styles } from './style'

const ModalView = (props) => {


  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          props.close();
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Icon name='ios-close-sharp' color={Color.GREEN} size={30} style={styles.iconStyle} onPress={props.close} />

            <Label xlarge>{props.title}</Label>

            <Label mt={responsiveHeight(1)}>
            {props.description}
              
            </Label>

            <View style={{
              width: responsiveWidth(56),
              justifyContent: "space-around",
              alignItems: 'center',
              marginTop: responsiveHeight(2),
              // flexDirection: 'row',
            }}>
              <Button
                onPress={props.submit}
                text="Submit"
                border_radius={15}
                textStyle={{
                  fontSize : 14
                }}
              />
              <Button
                onPress={props.close}
                text="Cancel"
                border_radius={15}
                mt={10}
                textStyle={{
                  fontSize : 14
                }}

              />
            </View>

          </View>
        </View>
      </Modal>
    </View>
  );
};



export default ModalView

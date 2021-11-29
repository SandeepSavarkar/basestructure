import React from "react";
import { StyleSheet } from 'react-native'
import { Color } from "../../../utils";
import { responsiveHeight, responsiveWidth } from "../../../utils/themeUtils";
export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,.5)'
       
    },
    modalView: {
        justifyContent: 'space-evenly',
        alignItems: "center",
        backgroundColor: Color.WHITE,
        width : responsiveWidth(80),
        borderRadius: 20,
        marginHorizontal: responsiveWidth(10),
        paddingVertical: responsiveHeight(5),
        paddingHorizontal: responsiveWidth(12),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    iconStyle: {
        position: 'absolute',
        top: responsiveHeight(1)
        , right: responsiveWidth(1)
    },
    button: {
        width : responsiveWidth(10),
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
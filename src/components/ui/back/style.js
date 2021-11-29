import { StyleSheet } from "react-native";
import { Color } from "../../../utils/color";
import { responsiveHeight, responsiveWidth } from '../../../utils/themeUtils';

const styles = StyleSheet.create({

    icon: {
        backgroundColor: Color.DARK_GRAY,
        elevation: 10,
        shadowColor: Color.DARK_GRAY,
        shadowOffset: { width: 0, height: 12, },
        shadowOpacity: 1,
        shadowRadius: 10.00,
        // borderWidth: 0,
        borderRadius: 10,
        justifyContent : 'center',alignItems : 'center',
        width: responsiveWidth(10),
        height: responsiveHeight(5),
        // position: 'absolute',
      
    },
})

export default styles;
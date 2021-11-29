import { StyleSheet } from 'react-native';
import { Color } from '../../../utils';
import { responsiveHeight, responsiveWidth } from '../../../utils/themeUtils';

const styles = StyleSheet.create({
    card: {
        height: responsiveHeight(30),
        width: responsiveWidth(40),
        marginVertical: 7,
        borderRadius: 20,
        elevation: 5,
        backgroundColor: Color.WHITE,
        justifyContent: 'center',
        paddingHorizontal: responsiveWidth(2)
    },
    img: {
        marginTop: responsiveHeight(1),
        borderRadius: responsiveHeight(1),
        width: responsiveHeight(15),
        height: responsiveHeight(12),
    },
});

export default styles;
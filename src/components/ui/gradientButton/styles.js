import { StyleSheet } from 'react-native'
import { Color } from '../../../utils/color'
import ThemeUtils, { responsiveHeight, responsiveWidth } from '../../../utils/themeUtils';

const styles = StyleSheet.create({
    main_container: {
        alignItems: 'center'
    },
    button: {
        width: '100%',
        height: '100%',
        borderRadius: responsiveWidth(12),
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: Color.WHITE,
        fontSize: 21,
        fontWeight: 'bold'
    },
})

export default styles
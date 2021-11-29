import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './style'
import Icon from 'react-native-vector-icons/Ionicons'


const Back = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.icon, props.iconContainer]} onPress={props.onPress}  >
            <Icon name={props.iconName} size={props.size} color={props.color} />
        </TouchableOpacity>
    )
}


export default Back
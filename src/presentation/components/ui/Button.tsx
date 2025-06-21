import React from 'react'
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native'
import { colors, globalStyles } from '../../../config/theme/globalStyles';

interface Props {
    text:string;
    customStyles?:StyleProp<ViewStyle>;
    onPress:() => void;
}

export const Button = ({text, customStyles, onPress}:Props) => {
  return (
    <Pressable 
        onPress={onPress}
        style={({pressed}) => ([
            globalStyles.btnPrimary,
            {
                opacity: pressed ? 0.7 : 1,
                backgroundColor: colors.primary
            },
            customStyles
        ])}
    >
        <Text style={[
            globalStyles.btnPrimaryText,
            {
                color:colors.buttonTextColor
            }
        ]}>{text}</Text>
    </Pressable>
  )
}

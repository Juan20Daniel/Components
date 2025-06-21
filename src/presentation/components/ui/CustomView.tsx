import React, { ReactNode } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { globalStyles } from '../../../config/theme/globalStyles'


interface Props {
    children?: ReactNode; 
    customStyle?: StyleProp<ViewStyle>;
}

export const CustomView = ({children, customStyle}:Props) => {
  return (
    <View style={[globalStyles.mainContainer, customStyle]}>
        {children}
    </View>
  )
}

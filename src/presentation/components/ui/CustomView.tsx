import React, { ReactNode } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { globalStyles } from '../../../config/theme/globalStyles'


interface Props {
    children?: ReactNode; 
    customStyle?: StyleProp<ViewStyle>;
    margin?: boolean;
}

export const CustomView = ({children, customStyle, margin=true}:Props) => {
  return (
    <View style={[
      globalStyles.mainContainer, 
      customStyle, 
      margin ? globalStyles.globalMargin : null
    ]}>
      {children}
    </View>
  )
}

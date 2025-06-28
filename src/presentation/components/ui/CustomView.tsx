import React, { ReactNode, useContext } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { globalStyles } from '../../../config/theme/globalStyles'
import { ThemeContext } from '../../context/ThemeContext';


interface Props {
  children?: ReactNode; 
  customStyle?: StyleProp<ViewStyle>;
  margin?: boolean;
}

export const CustomView = ({children, customStyle, margin=true}:Props) => {
  const { colors } = useContext(ThemeContext);
  console.log(colors);
  return (
    <View style={[
      globalStyles.mainContainer, 
      {backgroundColor: colors.background},
      customStyle, 
      margin ? globalStyles.globalMargin : null
    ]}>
      {children}
    </View>
  )
}

import { StyleProp, View, ViewStyle } from 'react-native'
import { colors } from '../../../config/theme/globalStyles';
import { Children, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    customStyles?:StyleProp<ViewStyle>;
}

export const Card = ({children,customStyles}:Props) => {
  return (
    <View style={[
        {
            backgroundColor:colors.cardBackground,
            borderRadius: 10,
            padding: 10  
        },
        customStyles 
    ]}>
        {children}
    </View>
  )
}

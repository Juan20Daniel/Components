import { StyleProp, View, ViewStyle } from 'react-native'
import { colors } from '../../../config/theme/globalStyles';
import { PropsWithChildren, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props extends PropsWithChildren {
  customStyles?:StyleProp<ViewStyle>;
}

export const Card = ({children,customStyles}:Props) => {
  const { colors } = useContext(ThemeContext);
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
  );
}

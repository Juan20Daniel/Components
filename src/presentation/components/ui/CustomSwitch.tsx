import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import { colors } from '../../../config/theme/globalStyles';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    isOn: boolean;
    text?:string;
    toggleSwitch: () => void;
}

export const CustomSwitch = ({isOn, text, toggleSwitch}:Props) => {
    const { colors } = useContext(ThemeContext);
    return (
        <View style={{...styles.switchRow, backgroundColor:colors.cardBackground}}>
            {text && <Text style={{color:colors.text}}>{text}</Text>}

            <Switch
                    thumbColor={Platform.OS === 'android' ? colors.primary : ''}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isOn}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    }
});
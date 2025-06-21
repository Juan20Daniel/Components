import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import { colors } from '../../../config/theme/globalStyles';

interface Props {
    isOn: boolean;
    text?:string;
    toggleSwitch: () => void;
}

export const CustomSwitch = ({isOn, text, toggleSwitch}:Props) => {
    return (
        <View style={styles.switchRow}>
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
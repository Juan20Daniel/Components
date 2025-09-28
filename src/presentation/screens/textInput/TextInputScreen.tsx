import { ScrollView, Text, TextInput } from 'react-native';
import { Card, CustomView, Title } from '../../components/ui';
import { globalStyles } from '../../../config/theme/globalStyles';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const TextInputScreen = () => {
    const [ form, setForm ] = useState({
        name:'',
        email:'',
        phone:'',
    });
    const { colors } = useContext(ThemeContext);
    return (
        <ScrollView>
            <CustomView customStyle={{gap:10, marginBottom:60}}>
                <Title text='TextInput' safe />
                <Card>
                    <TextInput 
                        style={{...globalStyles.input, borderColor:colors.text, color:colors.text}}
                        placeholderTextColor={colors.text}
                        placeholder='Escribe tu jodido nombre puta'
                        autoCapitalize='words'
                        autoCorrect={false}
                        value={form.name}
                        onChangeText={value => setForm({...form, name:value})}
                    />
                    <TextInput 
                        style={{...globalStyles.input, borderColor:colors.text, color:colors.text}}
                        placeholderTextColor={colors.text}
                        placeholder='Escribe tu jodido email puta'
                        autoCapitalize='none'
                        value={form.email}
                        onChangeText={value => setForm({...form, email:value})}
                        keyboardType='email-address'
                    />  
                    <TextInput 
                        style={{...globalStyles.input, borderColor:colors.text, color:colors.text}}
                        placeholderTextColor={colors.text}
                        placeholder='Escribe tu jodido teléfono puta'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='phone-pad'
                        value={form.phone}
                        onChangeText={value => setForm({...form, phone:value})}
                    />
                </Card>
                <Card>
                    <Text style={{color:colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                    <Text style={{color:colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                    <Text style={{color:colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                    <Text style={{color:colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                    <Text style={{color:colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                    <Text style={{color:colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                    <Text style={{color:colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                    <Text style={{color:colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                </Card>
                <TextInput 
                        style={globalStyles.input}
                        placeholder='Escribe tu jodido teléfono puta'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='phone-pad'
                        value={form.phone}
                        onChangeText={value => setForm({...form, phone:value})}
                    />
            </CustomView>
        </ScrollView>
    );
}

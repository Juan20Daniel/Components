import { useContext } from 'react';
import { Button, CustomView, Title } from '../../components/ui';
import { ThemeContext } from '../../context/ThemeContext';

export const ChangeThemeScreen = () => {
    const { setTheme, currentTheme } = useContext(ThemeContext);
    return (
        <CustomView customStyle={{gap:10}}>
            <Title text={`ChangeTheme ${currentTheme}`} safe />
            <Button 
                text='Light'
                onPress={() => setTheme('light')}
            />
            <Button 
                text='Dark'
                onPress={() => setTheme('dark')}
            />
        </CustomView>
    );
}
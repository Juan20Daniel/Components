import { ScrollView, View } from 'react-native';
import { menuItems, animationMenuItems, uiMenuItems } from '../../routes/routes';
import { globalStyles } from '../../../config/theme/globalStyles';
import { MenuItem, Title } from '../../components/ui';

export const HomeScreen = () => {
    return (
        <View style={{...globalStyles.mainContainer}}>
            <View style={globalStyles.globalMargin}>
                <ScrollView>
                    <Title
                        text='Opciones del menú'
                        safe
                    />
                    {animationMenuItems.map((item, index) => (
                        <MenuItem 
                            key={item.name} 
                            {...item}
                            isFirst={index===0}
                            isLast={index === animationMenuItems.length-1}
                        />
                    ))}
                    <View style={{marginTop:30}} />
                    {menuItems.map((item, index) => (
                        <MenuItem 
                            key={item.name} 
                            {...item}
                            isFirst={index===0}
                            isLast={index === menuItems.length-1}
                        />
                    ))}
                    <View style={{marginTop:30}} />
                    {uiMenuItems.map((item, index) => (
                        <MenuItem 
                            key={item.name} 
                            {...item}
                            isFirst={index===0}
                            isLast={index === uiMenuItems.length-1}
                        />
                    ))}
                </ScrollView>
            </View>          
        </View>
    );
}
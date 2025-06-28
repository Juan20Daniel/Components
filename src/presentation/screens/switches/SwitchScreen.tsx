import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Card, CustomSwitch, CustomView } from '../../components/ui';

export const SwitchScreen = () => {
    const { top } = useSafeAreaInsets();

    const [ state, setState ] = useState({
        isActive:true,
        isHungry: false,
        isHappy: true
    }) 
    return (
        <CustomView customStyle={{paddingHorizontal: 10, paddingTop:10, gap: 10,}}>
            <Card customStyles={{marginTop:top+20}}>
                <CustomSwitch 
                    isOn={state.isActive}
                    toggleSwitch={() => setState({...state, isActive:!state.isActive })}
                    text={state.isActive ? 'Activo' : 'Inactivo'}
                /> 
            </Card>
            <Card>
                <CustomSwitch 
                    isOn={state.isHappy}
                    toggleSwitch={() => setState({...state, isHappy:!state.isHappy })}
                    text={state.isHappy ? 'Esta feliz' : 'Ta triste el pendejo'}
                /> 
            </Card>
            <Card>
                <CustomSwitch 
                    isOn={state.isHungry}
                    toggleSwitch={() => setState({...state, isHungry:!state.isHungry })}
                    text={state.isHungry ? 'Tiene hambre' : 'No tiene hambre'}
                />
            </Card>
        </CustomView>
    );
}

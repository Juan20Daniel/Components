
import { Modal, StatusBar, Text, View } from 'react-native';
import { Button, CustomView, Title } from '../../components/ui';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const ModalScreen = () => {
    const [ toggleModal, setToggleModal ] = useState(false);
    const { colors } = useContext(ThemeContext);
    return (
        <CustomView>
            <Title text='Modals' safe />
            <Button 
                text='Open modal' 
                onPress={() => setToggleModal(!toggleModal)}
            />
            <Modal visible={toggleModal} transparent>
                <View style={{marginHorizontal:20, backgroundColor:colors.background}}>
                    <Title text='Modal content' />
                     <Button 
                        text='Close modal' 
                        onPress={() => setToggleModal(!toggleModal)}
                    />
                </View>
            </Modal>
        </CustomView>
    );
}

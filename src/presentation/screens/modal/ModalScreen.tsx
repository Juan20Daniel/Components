
import { Modal, StatusBar, Text, View } from 'react-native';
import { Button, CustomView, Title } from '../../components/ui';
import { useState } from 'react';

export const ModalScreen = () => {
    const [ toggleModal, setToggleModal ] = useState(false);
    return (
        <CustomView>
            <Title text='Modals' safe />
            <Button 
                text='Open modal' 
                onPress={() => setToggleModal(!toggleModal)}
            />
            <Modal visible={toggleModal}>
                <View>
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

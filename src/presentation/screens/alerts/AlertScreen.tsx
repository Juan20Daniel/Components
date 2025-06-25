import { Button, CustomView, Title } from '../../components/ui';
import { globalStyles } from '../../../config/theme/globalStyles';
import { Alert } from 'react-native';

export const AlertScreen = () => {
    const createTwoButtonAlert = () =>
    Alert.alert('Alerta 2 botones', undefined, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
    return (
        <CustomView customStyle={{...globalStyles.globalMargin, marginTop:40, gap:10}}>
            <Title text='Alertas' />

            <Button
                text='Alert 2 botones'
                onPress={() => createTwoButtonAlert()} 
            />
            <Button
                text='Alert 3 botones'
                onPress={() => createThreeButtonAlert()} 
            />
            <Button
                text='Prompt - Input'
                onPress={() => {}} 
            />
        </CustomView>
    );
}
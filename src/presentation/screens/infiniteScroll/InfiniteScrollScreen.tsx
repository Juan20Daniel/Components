import { useContext, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StatusBar, View } from 'react-native';
import { colors } from '../../../config/theme/globalStyles';
import { FadeinImage } from '../../components/ui';
import { ThemeContext } from '../../context/ThemeContext';

export const InfiniteScrollScreen = () => {
    const [ number, setNumber ] = useState([0,1,2,3,4,5,6,7]);
    const { colors } = useContext(ThemeContext);
    const loadMore = () => {
        const newNumbers = Array.from({length:5}, (_, i) => number.length + i);
        setTimeout(() => {
            setNumber(preState =>  ([...preState, ...newNumbers]));
        },1000);
    }
    return (
        <View style={{backgroundColor:colors.background}}>
            <StatusBar barStyle='light-content' />
            <FlatList 
                data={number}
                onEndReached={loadMore}
                onEndReachedThreshold={0.6}
                renderItem={({item}) => (
                    <ListItem number={item} />
                )}
                keyExtractor={item => item.toString()}
                ListFooterComponent={() => (
                    <View 
                        style={{
                            flex:1, 
                            height: 150, 
                            alignItems:'center',
                            justifyContent:'flex-start' 
                        }} 
                    >
                        <ActivityIndicator size={60} color={colors.text} />
                    </View>
                )}
            />
        </View>
    );
}

interface ListItemProps {
    number: number;
}

const ListItem = ({number}:ListItemProps) => (
    <FadeinImage 
        uri={`https://picsum.photos/id/${number}/500/400`}
        customStyle={{
            width:'100%', 
            height: 300, 
            backgroundColor:colors.primary, 
            marginBottom:10, 
            objectFit:'cover'
        }}
    />
);

import { RefreshControl, ScrollView, useWindowDimensions } from 'react-native';
import { CustomView, Title } from '../../components/ui';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';

export const PullToRefreshScreen = () => {
    const [ isRefreshing, setIsRefresing ] = useState(false);
    const { top }  = useSafeAreaInsets();
    const { height } = useWindowDimensions();
    const onRefresh = () => {
        setIsRefresing(true);

        setTimeout(() => {
            setIsRefresing(false)
        },3000)
    }
    return (
        <ScrollView 
            refreshControl={
                <RefreshControl 
                    refreshing={isRefreshing}
                    progressViewOffset={top}
                    onRefresh={onRefresh}
                />
            }
        >
            <CustomView customStyle={{height}}>
                <Title text='Pull To Refresh' safe />
            </CustomView>
        </ScrollView>
    );
}

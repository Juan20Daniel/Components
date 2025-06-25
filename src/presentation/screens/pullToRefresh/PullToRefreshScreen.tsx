
import { RefreshControl, ScrollView } from 'react-native';
import { CustomView, Title } from '../../components/ui';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';

export const PullToRefreshScreen = () => {
    const [ isRefreshing, setIsRefresing ] = useState(false);
    const { top }  = useSafeAreaInsets();
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
            <CustomView>
                <Title text='Pull To Refresh' safe />
            </CustomView>
        </ScrollView>
    );
}

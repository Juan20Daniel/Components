
import { FlatList, Image, NativeScrollEvent, NativeSyntheticEvent, Text, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, globalStyles } from '../../../config/theme/globalStyles';
import * as data from './data';
import { Button } from '../../components/ui';
import { useRef, useState } from 'react';

export const SlidesScreen = () => {
    const [ currentSliceIndex, setCurrentSliceIndex ] = useState(0);
    const flatListRef = useRef<FlatList>(null);
    const {top} = useSafeAreaInsets();
    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent;
        const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
        setCurrentSliceIndex(currentIndex > 0 ? currentIndex : 0);
    }
    const doScroll = (index:number) => {
        if(!flatListRef.current) return;

        flatListRef.current.scrollToIndex({index, animated:true})
    }
    return (
        <View style={{
            flex:1,
            backgroundColor: colors.background,
            marginTop:top,
        }}>
            <FlatList 
                ref={flatListRef}
                data={data.items}
                keyExtractor={item => item.title}
                renderItem={({item}) => <SliderItem item={item} />}
                horizontal
                pagingEnabled
                scrollEnabled
                onScroll={onScroll}
                showsHorizontalScrollIndicator={false}
            />
            <Button 
                text={currentSliceIndex === data.items.length-1 ? 'Finalizado' :'Siguiente'}
                onPress={() => {
                    doScroll(currentSliceIndex+1)
                }}
                customStyles={{marginBottom: 60, marginHorizontal:20}}
            />
        </View>
    );
}

interface SlideItemProps {
    item:data.Slide;
}

const SliderItem = ({item}:SlideItemProps) => {
    const {width} = useWindowDimensions();
    const { title, img, desc } = item;
    return (
        <View 
            style={{
                backgroundColor: 'white',
                borderRadius: 5,
                padding: 40,
                justifyContent: 'center',
                width:width,

            }}
        >
            <Image
                source={img}
                style={{
                    width:width*0.7,
                    height: width*0.7,
                    resizeMode:'center',
                    alignSelf:'center'
                }}
            />
            <Text 
                style={[
                    globalStyles.title,
                    
                ]}
            >
                {title}
            </Text>
            <Text style={{marginTop:10}}>{desc}</Text>
        </View>
    )   
}
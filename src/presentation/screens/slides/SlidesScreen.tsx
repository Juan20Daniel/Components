import { useContext, useRef, useState } from 'react';
import { FlatList, Image, NativeScrollEvent, NativeSyntheticEvent, Text, useWindowDimensions, View } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { globalStyles } from '../../../config/theme/globalStyles';
import { Button } from '../../components/ui';
import * as data from './data';

export const SlidesScreen = () => {
    const [ currentSliceIndex, setCurrentSliceIndex ] = useState(0);
    const { colors } = useContext(ThemeContext);
    const flatListRef = useRef<FlatList>(null);

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent;
        const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
        setCurrentSliceIndex(currentIndex > 0 ? currentIndex : 0);
    }
    const doScroll = (index:number) => {
        if(!flatListRef.current) return;

        flatListRef.current.scrollToIndex({index, animated:true});
    }
    return (
        <View style={{
            flex:1,
            backgroundColor: colors.background,
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
    const { colors } = useContext(ThemeContext);
    const {width} = useWindowDimensions();
    const { title, img, desc } = item;
    return (
        <View 
            style={{
                backgroundColor: colors.background,
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
                    {color:colors.text}
                ]}
            >
                {title}
            </Text>
            <Text style={{marginTop:10, color:colors.text}}>{desc}</Text>
        </View>
    );
}
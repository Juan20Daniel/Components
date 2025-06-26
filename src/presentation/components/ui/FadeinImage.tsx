import { useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, Text, View } from 'react-native';
import { useAnimation } from '../../hooks/useAnimation';

interface Props {
    uri: string;
    customStyle?: StyleProp<ImageStyle>;
}

export const FadeinImage = ({ uri, customStyle }:Props) => {
    const { animatenOpacity, fadeIn } = useAnimation();
    const [ isLoading, setIsLoading ] = useState(true);
    return (
        <View style={{ justifyContent:'center', alignItems:'center' }}>
            {isLoading &&
                <ActivityIndicator 
                    style={{position:'absolute'}}
                    color='gray'
                    size={30}
                />
            }
            <Animated.Image 
                source={{uri}}
                onLoadEnd={() => {
                    fadeIn({});
                    setIsLoading(false);
                }}
                style={[customStyle, {opacity:animatenOpacity}]}
            />
        </View>
    );
}

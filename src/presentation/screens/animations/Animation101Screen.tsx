import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../config/theme/globalStyles';
import { useAnimation } from '../../hooks/useAnimation';
import { CustomView } from '../../components/ui';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const Animation101Screen = () => {
    const { animatenOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation();
    const { colors } = useContext(ThemeContext); 
    return (
        <CustomView customStyle={styles.container}>
            <Animated.View 
                style={[
                    styles.purpleBox,
                    {
                        opacity: animatenOpacity,
                        transform: [{translateY: animatedTop}]
                    }
                ]} 

            />
            <Pressable onPress={() => {
                fadeIn({});
                startMovingTopPosition({
                    initialPosition:-200, 
                    duration:500,
                    easing:Easing.elastic(2)});
            }} style={{marginTop:10}}>
                <Text style={{color:colors.text}}>FadeIn</Text>
            </Pressable>
            <Pressable onPress={() => fadeOut({})} style={{marginTop:10}}>
                <Text style={{color:colors.text}}>FadeOut</Text>
            </Pressable>
        </CustomView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        flex: 1,
    },
    purpleBox: {
        backgroundColor: colors.primary,
        width: 150,
        height: 150,
    }
});
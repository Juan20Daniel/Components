import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../config/theme/globalStyles';
import { useAnimation } from '../../hooks/useAnimation';

export const Animation101Screen = () => {
    const { animatenOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation();

    return (
        <View style={styles.container}>
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
                <Text>FadeIn</Text>
            </Pressable>
            <Pressable onPress={() => fadeOut({})} style={{marginTop:10}}>
                <Text>FadeOut</Text>
            </Pressable>
        </View>
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

//  const animatenOpacity = useRef(new Animated.Value(1)).current;
//  const animatenTop = useRef(new Animated.Value(-200)).current;
// const fadeIn = () => {
    //      Animated.timing(animatenTop, {
    //         toValue: 0,
    //         duration: 700,
    //         useNativeDriver: true,
    //         easing: Easing.bounce,
    //     }).start()

    //     Animated.timing(animatenOpacity,{
    //         toValue: 1,
    //         duration: 1000,
    //         useNativeDriver: true
    //     }).start();
    // }
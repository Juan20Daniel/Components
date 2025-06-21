import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {
    const animatenOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;
    
    const fadeIn = ({duration=300, toValue=1, callback = () => {} }) => {
        Animated.timing(animatenOpacity,{
            toValue: toValue,
            duration: duration,
            useNativeDriver: true
        }).start(callback);
    }
    const fadeOut = ({duration=300, toValue=0, callback = () => {} }) => {
        Animated.timing(animatenOpacity, {
            toValue: toValue,
            duration:duration,
            useNativeDriver: true
        }).start(callback);
    }

    const startMovingTopPosition = ({
        initialPosition=0,
        toValue=0,
        duration = 300,
        easing = Easing.bounce,
        callback = () => {}
    }) => {
       
        animatedTop.setValue(initialPosition);

        Animated.timing(animatedTop, {
            toValue:toValue,
            duration:duration,
            useNativeDriver:true,
            easing:easing
        }).start(callback);
    }

    return {
        animatenOpacity,
        animatedTop,
        fadeIn,
        fadeOut,
        startMovingTopPosition
    }
}

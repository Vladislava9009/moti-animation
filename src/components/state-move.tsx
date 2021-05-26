import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { MotiView, useAnimationState } from 'moti'

export const StateMove = () => {

    const fadeInState = useAnimationState({
        from: {
            opacity: 0,
            rotate: '0deg',
            // translateX:''
        },
        to: {
            opacity: 1,
            rotate: '40deg'
        },
        up: {
            opacity: 0.5,
            // scale: 0.5
        }


    })

    const onPress = () => {
        if (fadeInState.current === 'to') {
            fadeInState.transitionTo('up')
        }
    }
    return <Pressable onPress={onPress}>
        <MotiView state={fadeInState} delay={1000} style={styles.shape} />
    </Pressable>


}


const styles = StyleSheet.create({
    shape: {
        height: 250,
        width: 250,
        backgroundColor: '#f66666',
        borderRadius: 16
    }
});
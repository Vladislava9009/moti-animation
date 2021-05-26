import React from 'react'
import { StyleSheet, Pressable, View } from 'react-native'
import { AnimatePresence, MotiView, useAnimationState } from 'moti'

export const Presence = () => {
    const [shown, setShown] = React.useState(true)
    const toggle = () => setShown(!shown)

    const fadeInState = useAnimationState({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
        up: {
            opacity: 0.5,
            // scale: 0.5
        }


    })


    return <Pressable onPress={toggle} style={styles.container}>
        <AnimatePresence exitBeforeEnter>
            {shown && <MotiView from={{
                opacity: 0,
                translateY: -20,
                width: 100
            }}
                animate={{
                    opacity: 1,
                    translateY: 0,
                    width: 200
                }}
                style={styles.shape}
                exit={{
                    opacity: 0,
                    width: 100
                }}
                transition={{ type: 'spring' }}
            />}

        </AnimatePresence>


    </Pressable>
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#7928CA',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shape: {
        height: 250,
        width: 250,
        backgroundColor: '#7fff',
        borderRadius: 16
    }
});
import React from 'react';
import { StyleSheet } from 'react-native';

import { View as MotiView } from 'moti'

export const SimpleMove = () => {
    return <MotiView
        style={styles.shape}
        from={{ opacity: 0, translateY: -100, }}
        animate={{
            opacity: 1,
            translateY: [0,
                {
                    value: 100,
                    type: 'timing',
                    delay: 500
                },
                0, 200]
        }} />
}

const styles = StyleSheet.create({
    shape: {
        height: 250,
        width: 250,
        backgroundColor: 'cyan',
        borderRadius: 16
    }
});
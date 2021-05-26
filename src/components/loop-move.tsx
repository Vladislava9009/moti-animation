import React from 'react';
import { StyleSheet } from 'react-native';

import { View as MotiView } from 'moti'

export const LoopMove = () => {
    return <MotiView
        style={styles.shape}
        from={{ translateY: -20, }}
        animate={{
            translateY: 0
        }}
        transition={{ type: 'timing', loop: true }} />
}

const styles = StyleSheet.create({
    shape: {
        height: 250,
        width: 250,
        backgroundColor: '#f66666',
        borderRadius: 16
    }
});
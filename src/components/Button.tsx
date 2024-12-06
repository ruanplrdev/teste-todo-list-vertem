import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import {colors, spacing, typography} from '../theme';

interface Button {
    title: string,
    onPress?: ()=>void,
    style?: ViewStyle,
    textStyle?: TextStyle,
}
const Button = ({ title, onPress, style, textStyle }: Button) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        padding: spacing.md,
        borderRadius: spacing.sm,
        alignItems: 'center',
    },
    text: {
        color: colors.textLight,
        ...typography.body,
    },
});

export default Button;

import React, { Dispatch, SetStateAction } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { colors, spacing } from '../theme';
interface TodoInput {
    value: string,
    onChangeText: Dispatch<SetStateAction<string>>,
    placeholder: string,
}
const TodoInput = ({ value, onChangeText, placeholder }: TodoInput) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.border}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.sm,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: spacing.sm,
    padding: spacing.md,
    fontSize: 16,
    backgroundColor: colors.background,
  },
});

export default TodoInput;

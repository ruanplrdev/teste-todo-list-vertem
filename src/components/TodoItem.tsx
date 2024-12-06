import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing } from '../theme';
interface TodoItem {
    task: string,
    onDelete: ()=>void
}
const TodoItem = ({ task, onDelete }:TodoItem) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task}</Text>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.md,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
  delete: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});

export default TodoItem;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing, typography } from '../theme';

export interface TodoItemProps {
  title: string;
  description: string;
  onDelete?: () => void;
  onComplete?: () => void;
  completed: boolean;
}

const TodoItem = ({ title, description, onDelete, onComplete, completed }: TodoItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        <TouchableOpacity onPress={onComplete}>
          <View style={styles.check}>
            {completed && <View style={styles.checked} />}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={onDelete}>
          <Text style={styles.delete}>X</Text>
        </TouchableOpacity>
      </View>
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
  textContainer: {
    flex: 1,
    marginRight: spacing.md,
  },
  title: {
    color: colors.text,
    ...typography.body,
  },
  description: {
    fontSize: typography.bodysm.fontSize,
    color: colors.secondaryText,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  delete: {
    color: colors.error,
    marginLeft: spacing.sm,
    fontSize: typography.title.fontSize,
  },
  check: {
    width: 30,
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.secondaryText,
    marginRight: spacing.md,
  },
  checked: {
    width: 14,
    height: 14,
    borderRadius: 30,
    backgroundColor: colors.secondaryText,
    margin: 7,
  },
});

export default TodoItem;

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing } from '../theme';
import { Checkbox, CheckboxProps } from 'react-native-paper';

export interface TodoItemProps {
  title: string;
  description: string;
  onDelete?: () => void;
  onComplete?: () => void;
  completed:boolean;
}

const TodoItem = ({ title, description, onDelete, onComplete }: TodoItemProps) => {
  const [isChecked, setIsChecked] = useState<CheckboxProps['status']>('unchecked');

  const handleCheck = () => {
    setIsChecked('checked');
    if(onComplete){
      onComplete();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        <TouchableOpacity onPress={onComplete}>
          <View  style={styles.check}/>
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
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  description: {
    fontSize: 14,
    color: colors.secondaryText,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  delete: {
    fontSize: 20,
    color: colors.error,
    fontWeight: 'bold',
    marginLeft: spacing.sm,
  },
  check:{
    width: 30,
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.secondaryText,
    marginRight: 16,
  }
});

export default TodoItem;

import React, { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TodoItem, { TodoItemProps } from '../components/TodoItem';
import { spacing, colors } from '../theme';
import { TodoContext, TodoContextProps } from '../src/context/TodoContext';


const CompletedTasksScreen = () => {
  const { tasks, deleteTask } = useContext<TodoContextProps>(TodoContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks.filter((t: TodoItemProps) => t.completed)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TodoItem
            title={item.title} onDelete={() => deleteTask(index)} description={item.description} completed={item.completed} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    backgroundColor: colors.background,
  },
});

export default CompletedTasksScreen;

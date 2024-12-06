import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import TodoItem from '../components/TodoItem';
import Button from '../components/Button';
import { spacing, colors } from '../theme';
import TodoInput from '../components/TodoIput';

const TodoListScreen = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (index:number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <TodoInput
        value={task}
        onChangeText={setTask}
        placeholder="Adicione uma tarefa..."
      />
      <Button title="Adicionar" onPress={addTask} style={{ marginBottom: spacing.md }} />
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TodoItem task={item} onDelete={() => deleteTask(index)} />
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

export default TodoListScreen;

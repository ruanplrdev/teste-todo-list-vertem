import React, { useContext } from 'react';
import { View, FlatList, StyleSheet, Text, Alert } from 'react-native';
import TodoItem, { TodoItemProps } from '../components/TodoItem';
import { spacing, colors, typography } from '../theme';
import { TodoContext, TodoContextType } from '../src/context/TodoContext';
import Button from '../components/Button';

const CompletedTasksScreen = () => {
  const { tasks, deleteTask, deleteAllTasks } = useContext<TodoContextType>(TodoContext);

  const confirmDeleteAll = () => {
    Alert.alert(
      'Excluir Todas as Tarefas',
      'Você tem certeza de que deseja excluir todas as tarefas concluídas?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir Tudo',
          onPress: () => deleteAllTasks(),
        },
      ],
      { cancelable: false }
    );
  };

  const confirmDeleteTask = (index: number) => {
    Alert.alert(
      'Excluir Tarefa',
      'Você tem certeza de que deseja excluir esta tarefa?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => deleteTask(index),
        },
      ],
      { cancelable: false }
    );
  };

  const completedTasks = tasks.filter((t: TodoItemProps) => t.completed);

  return (
    <View style={styles.container}>
      {completedTasks.length === 0 ? (
        <Text style={styles.noTasksText}>Nenhuma tarefa concluída.</Text>
      ) : (
        <>
          <FlatList
            data={completedTasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TodoItem
                title={item.title}
                onDelete={() => confirmDeleteTask(index)}
                description={item.description}
                completed={item.completed}
              />
            )}
          />
          <Button title="Excluir Todas" onPress={confirmDeleteAll} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    backgroundColor: colors.background,
  },
  noTasksText: {
    textAlign: 'center',
    color: colors.secondaryText,
    marginTop: spacing.lg,
    ...typography.subtitle,
  },
});

export default CompletedTasksScreen;

import React, { useContext, useState } from 'react';
import { View, FlatList, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TodoItem from '../components/TodoItem';
import Button from '../components/Button';
import { spacing, colors } from '../theme';
import {  TodoContext, TodoContextProps } from '../src/context/TodoContext';

const TodoListScreen = () => {
  const { tasks, moveTaskToCompleted, deleteTask } = useContext<TodoContextProps>(TodoContext);
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  // Filtra as tarefas com base no texto da pesquisa
  const filteredTasks = tasks.filter(
    (t:any) => !t.completed && t.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Barra de Pesquisa */}
      <TextInput
        style={styles.searchBar}
        placeholder="Pesquisar tarefas..."
        placeholderTextColor={colors.secondaryText}
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Botão de Adicionar Tarefa */}
      <Button
        title="Adicionar Nova Tarefa"
        onPress={() => navigation.navigate('Adicionar Tarefa')}
        style={{ marginBottom: spacing.md }}
      />

      {/* Lista de Tarefas */}
      <FlatList
        data={filteredTasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TodoItem
            title={item.title}
            onDelete={() => deleteTask}
            description={item.description}
            onComplete={() => moveTaskToCompleted(index)}
            completed={item.completed}          />
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
  searchBar: {
    height: 40,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.sm,
    color: colors.text,
  },
});

export default TodoListScreen;

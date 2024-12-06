import React, { useContext, useState } from 'react';
import { View, FlatList, StyleSheet, TextInput, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TodoItem from '../components/TodoItem';
import Button from '../components/Button';
import { spacing, colors, typography } from '../theme';
import { TodoContext, TodoContextProps } from '../src/context/TodoContext';

const TodoListScreen = () => {
  const { tasks, moveTaskToCompleted, deleteTask } = useContext<TodoContextProps>(TodoContext);
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  // Filtra as tarefas com base no texto da pesquisa
  const filteredTasks = tasks.filter(
    (t: any) => !t.completed && t.title.toLowerCase().includes(searchText.toLowerCase())
  );

  // Função para exibir a notificação de conclusão da tarefa
  const handleCompleteTask = (taskTitle: string, index: number) => {
    moveTaskToCompleted(index); // Marca a tarefa como concluída
    Alert.alert('Parabéns!', `Você concluiu a tarefa "${taskTitle}"`); // Exibe a notificação
  };

  // Função para confirmar a exclusão de uma tarefa
  const confirmDeleteTask = (index: number) => {
    Alert.alert(
      'Confirmar Exclusão',
      'Tem certeza de que deseja excluir esta tarefa?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Exclusão cancelada'),
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => deleteTask(index), // Exclui a tarefa se confirmada
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

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
        title="+ Adicionar Nova Tarefa"
        onPress={() => navigation.navigate('Adicionar')}
        style={{ marginBottom: spacing.md }}
      />

      {/* Verifica se há tarefas para mostrar */}
      {filteredTasks.length === 0 ? (
        <Text style={styles.noTasksText}>Nenhuma tarefa encontrada.</Text>
      ) : (
        <FlatList
          data={filteredTasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TodoItem
              title={item.title}
              onDelete={() => confirmDeleteTask(index)}  // Chama a função de confirmação para exclusão
              description={item.description}
              onComplete={() => handleCompleteTask(item.title, index)}  // Chama a função para concluir a tarefa
              completed={item.completed}
            />
          )}
        />
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
  searchBar: {
    height: 40,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: spacing.sm,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.sm,
    color: colors.text,
  },
  noTasksText: {
    textAlign: 'center',
    color: colors.secondaryText,
    marginTop: spacing.lg,
    ...typography.subtitle,
  },
});

export default TodoListScreen;

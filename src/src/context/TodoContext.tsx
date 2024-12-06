import React, { createContext, useState } from 'react';
import { TodoItemProps } from '../../components/TodoItem';

export interface TodoContextProps {
  tasks: TodoItemProps[];
  deleteTask: (index: number) => void;
  addTask: (item:TodoItemProps)=>void;
  deleteAllTasks:  () => void,
  moveTaskToCompleted:(index: number)=>void;
}
export const TodoContext = createContext<TodoContextProps>({
  tasks: [],
  deleteTask: () => undefined,
  addTask: () => undefined,
  deleteAllTasks:  () => undefined,
  moveTaskToCompleted: () => {},
});

export interface TodoProviderProps  {
  children: React.JSX.Element
}
export const TodoProvider = ({children}: TodoProviderProps) => {
  const [tasks, setTasks] = useState<TodoItemProps[]>([]);

  const addTask = ({ title, description }:TodoItemProps) => {
    if (title.trim()) {
      setTasks([...tasks, { title, description, completed: false }]);
    }
  };

  const deleteAllTasks = () => {
    setTasks(prevTasks => prevTasks.filter(task => !task.completed)); // Remove todas as tarefas concluídas
  };

  const moveTaskToCompleted = (index:number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  const deleteTask = (index:number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <TodoContext.Provider
      value={{
        tasks,
        deleteAllTasks,
        addTask,
        moveTaskToCompleted,
        deleteTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

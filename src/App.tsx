import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TodoProvider } from './src/context/TodoContext';
import TodoListScreen from './screen/TodoListScreen';
import CompletedTodoListScreen from './screen/CompletedTodoListScreen';
import AddTaskScreen from './screen/AddTaskScreen';

type RootStackParamList = {
  Home: undefined;
  Adicionar: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const TabsNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Minhas Tarefas"
      component={TodoListScreen}
    />
    <Tab.Screen name="Finalizadas" component={CompletedTodoListScreen} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <TodoProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={TabsNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Adicionar" component={AddTaskScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TodoProvider>
  );
};

export default App;

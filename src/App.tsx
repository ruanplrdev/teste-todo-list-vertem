import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TodoProvider } from './src/context/TodoContext';
import TodoListScreen from './screen/TodoListScreen';
import CompletedTodoListScreen from './screen/CompletedTodoListScreen';
import AddTaskScreen from './screen/AddTaskScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabsNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="A Fazer"
      component={TodoListScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: () =>  <Icon name="home" size={20} color={"#000"} />,
      }}
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
          <Stack.Screen name="Adicionar Tarefa" component={AddTaskScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TodoProvider>
  );
};

export default App;

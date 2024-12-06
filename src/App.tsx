import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TodoListScreen from './screen/TodoListScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TodoListScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

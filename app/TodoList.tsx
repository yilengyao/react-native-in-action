import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';
import { TodoListProps } from './types';

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, toggleComplete, type }) => {
  const getVisibleTodos = (todos: any[], type: string) => {
    switch (type) {
      case 'All':
        return todos;
      case 'Complete':
        return todos.filter((todo) => todo.complete);
      case 'Active':
        return todos.filter((todo) => !todo.complete);
      default:
        return todos;
    }
  }
  todos = getVisibleTodos(todos, type);
  todos = todos.map((todo, i) => {
    return (
      <Todo
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        key={i}
        todo={todo} />
    )
  })
  return (
    <View>
      {todos}
    </View>
  )
}

export default TodoList;

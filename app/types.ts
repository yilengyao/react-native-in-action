// Define the Todo type
export interface Todo {
  title: string;
  todoIndex: number;
  complete: boolean;
}

// Define the AppProps and AppState for the main App component
export interface AppProps {
  title: string;
}

export interface AppState {
  inputValue: string;
  todos: Todo[];
  type: string;
}

// Define TodoProps for the Todo component
export interface TodoProps {
  todo: Todo;
  toggleComplete: (todoIndex: number) => void;
  deleteTodo: (todoIndex: number) => void;
}

// Define ButtonProps for the Button component
export interface ButtonProps {
  submitTodo: () => void;
}

// Define HeadingProps for the Heading component
export interface HeadingProps {
  title: string;
}

// Define InputProps for the Input component
export interface InputProps {
  inputValue: string;
  inputChange: (text: string) => void;
}

// Define TabBarProps for the TabBar component
export interface TabBarProps {
  setType: (type: string) => void;
  type: string;
}

// Define TabBarItemProps for the TabBarItem component
export interface TabBarItemProps {
  border?: boolean;
  title: string;
  selected?: boolean;
  setType: () => void;
  type: string;
}

// Define TodoButtonProps for the TodoButton component
export interface TodoButtonProps {
  onPress: () => void;
  complete?: boolean;
  name: string;
}

// Define TodoListProps for the TodoList component
export interface TodoListProps {
  todos: any[];
  deleteTodo: (todoIndex: number) => void;
  toggleComplete: (todoIndex: number) => void;
  type: string;
}


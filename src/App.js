import React from 'react';
import TodoList from './Todo/TodoList';

function App() {
  const [todos, setTodos] = React.useState([
    {id:1, completed: false, title: 'Купить хлеб'},
    {id:2, completed: true, title: 'Купить водку'},
    {id:3, completed: false, title: 'Купить молоко'},
  ]);
  
  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo
      })
    )
    console.log('todo id', todos)
  }

  return(
    <div className="wrapper">
      <h1>React приложение</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;

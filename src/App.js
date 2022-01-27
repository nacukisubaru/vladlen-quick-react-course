import React, { useEffect } from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import Loader from "./Loader";

function App() {
    const [todos, setTodos] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const AddTodo = React.lazy(
        () =>
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve(import("./Todo/AddTodo"));
                });
            })
    );

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
            .then((response) => response.json())
            .then((todos) => {
                setTimeout(() => {
                    setTodos(todos);
                    setLoading(false);
                }, 2000);
            });
    }, []);

    function toggleTodo(id) {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        );
        console.log("todo id", todos);
    }

    function removeTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    function addTodo(title) {
        setTodos(
            todos.concat([
                {
                    id: Date.now(),
                    completed: false,
                    title,
                },
            ])
        );
    }

    return (
        <Context.Provider value={{ removeTodo }}>
            <div className="lds-ripple" />
            <div className="wrapper">
                <h1>React приложение</h1>
                <React.Suspense fallback={<p>Loading...</p>}>
                <AddTodo onCreate={addTodo} />
                </React.Suspense>
                {loading && <Loader />}
                {todos.length ? (
                    <TodoList todos={todos} onToggle={toggleTodo} />
                ) : loading ? null : (
                    <p>Дела закончились</p>
                )}
            </div>
        </Context.Provider>
    );
}

export default App;

import React from 'react'
import TodoItem from './TodoItem';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

export default function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {
                props.todos.map((item, index) => {
                    return <TodoItem todoItem={item} key={item.id} index={index} />
                })
            }
        </ul>
    );
}
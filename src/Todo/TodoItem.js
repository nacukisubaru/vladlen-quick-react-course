import PropTypes from "prop-types";
import React from "react";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({todoItem, index, onChange}) {
    var doneClass = 'not-done';
    if(todoItem.completed) {
        doneClass = 'done';
    }
    return (
        <li style={styles.li}>
            <span className={doneClass}>
                <input 
                    type="checkbox"
                    checked={todoItem.completed} 
                    style={styles.input} 
                    onChange={()=> onChange(todoItem.id)}    
                />
                <strong>{index + 1}</strong>
                &nbsp;
                {todoItem.title}
            </span>
            <button className="rm">&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todoItem: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem
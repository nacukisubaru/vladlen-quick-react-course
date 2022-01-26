import React from "react";

export default function TodoItem({todoItem, index}) {
    return (
        <li>
            <strong>{index + 1}</strong>
            {todoItem.title}
        </li>
    )
}
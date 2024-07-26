import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function TodoList(props) {
    return (
        <div style={s.todo}>
           <div className='todo-Container'>
                <div className='todo-Incomplete'></div> 
                <div className='todo-complete'></div> 
                <div className='todo-completeDate'></div> 
            </div> 
        </div>
    );
}

export default TodoList;
import React from 'react';

const TodoList : React.FC = () => {
    const title : string = "오늘 할 일";
    return(
        <div className='container'>
            <h1>{title}</h1>
        </div>
    );
}

export default TodoList;

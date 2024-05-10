import React, { useState } from 'react';

const TodoList : React.FC = () => {
    const title : string = "오늘 할 일";

    // 구조 분해 할당 
    const [todos, setTodos] = useState<string[]>(['공부하기', '잠자기', '미팅하기']);
    return(
        <div>
            <h1>{title}</h1>
            <p></p>
            <div className='container'>
                <div className='board'>
                    <ul>
                        <li>{todos[0]}</li>
                        <li>{todos[1]}</li>
                        <li>{todos[2]}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TodoList;

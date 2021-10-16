import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';

TodoList.propTypes = {
    todoListn: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoListn: [],
    onTodoClick: null,
}

function TodoList({ todoListn, onTodoClick }) {
    const handTodoClick = (todo, idx)=> {
        if(!onTodoClick) return;

        onTodoClick(todo,idx);
    }
    return (
        <TDList>
            <ul className="todo-List">
                {todoListn.map((todo,idx) => (
                    <li key={todo.id}
                        className={classnames({
                            'todo-iteam': true,
                            complated: todo.status === 'complatedd'
                        })}
                        onClick={()=> handTodoClick(todo,idx)}
                        >
                        {todo.title} - {todo.name}
                    </li>
                ))}
            </ul>
        </TDList>
    );
}

const TDList = styled.div`
    ul{
        text-decoration: none;
        list-style: none;
    }
    li{
        cursor: pointer;
    }
    li.complated{
        color: #ccc;
        text-decoration: line-through;
    }

`



export default TodoList;
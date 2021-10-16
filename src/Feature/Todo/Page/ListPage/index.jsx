import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../Components/TodoList/TodoList';
import QueryString from 'query-string';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import ToDoForm from '../../Components/ToDoForm';

ListPage.propTypes = {};

function ListPage(props) {
  const intTodoList = [
    {
      id: 1,
      title: 'tltle1',
      name: 'name1',
      status: 'new',
    },

    {
      id: 2,
      title: 'tltle2',
      name: 'name2',
      status: 'complatedd',
    },
    {
      id: 3,
      title: 'tltle3',
      name: 'name3',
      status: 'new',
    },
    {
      id: 4,
      title: 'tltle4',
      name: 'name4',
      status: 'new',
    },
  ];
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(intTodoList);
  // const [filteredStatus, setFilteredStatus] = useState('all');

  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = QueryString.parse(location.search);
    // console.log(params);
    return params.status || 'all';
  });

  useEffect(() => {
    const params = QueryString.parse(location.search);
    setFilteredStatus(params.status || 'all');
  }, [location.search]);

  const handTodoClick = (todo, idx) => {
    console.log(todo, idx);
    // clone ra 1 mang moi
    const newTodoList = [...todoList];
    //togle useState
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'complatedd' : 'new',
    };
    setTodoList(newTodoList);
  };

  const renderTodoList = useMemo(() => {
    return todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
  }, [todoList, filteredStatus]);

  console.log(renderTodoList);

  const showAllClick = () => {
    setFilteredStatus('all');
    const queryparam = { status: 'all' };
    history.push({
      pathname: match.path,
      search: QueryString.stringify(queryparam),
    });
  };

  const showComplatedClick = () => {
    setFilteredStatus('complatedd');
    const queryparam = { status: 'complatedd' };
    history.push({
      pathname: match.path,
      search: QueryString.stringify(queryparam),
    });
  };

  const showNewClick = () => {
    setFilteredStatus('new');
    const queryparam = { status: 'new' };
    history.push({
      pathname: match.path,
      search: QueryString.stringify(queryparam),
    });
  };

  //Todo Form
  const handleTodoFormSubmit = (values) => {
    console.log('Form submit: ', values);
  }; 
  return (
    <div>
      <h1>WWhat todo Form</h1>
      <ToDoForm onSubmit={handleTodoFormSubmit}/>


      <h1>TodoList + onclick active class</h1>
      <TodoList todoListn={renderTodoList} onTodoClick={handTodoClick} />

      <button onClick={showAllClick}>Show Alll</button>
      <button onClick={showComplatedClick}>Show Complated</button>
      <button onClick={showNewClick}> Show New</button>
    </div>
  );
}

export default ListPage;

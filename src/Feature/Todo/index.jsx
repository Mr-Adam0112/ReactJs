import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './Components/TodoList/TodoList';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './Page/ListPage';
import Detail from './Page/DetailPage';
import NotFound from '../../components/NotFound';

function TodoFeatera(props) {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={Detail} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default TodoFeatera;

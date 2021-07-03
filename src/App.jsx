import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import List from './components/List';
import Dashboard from './components/Dashboard';
import Detail from './components/Detail';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/:section" component={List} />
          <Route exact path="/:section/:id" component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

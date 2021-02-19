import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Gallery from './Components/Gallery';

const App = () => {

  return (
    <div>
      <Switch>
        <Route path='/' exact component={Gallery} />
        <Redirect to='/' />        
      </Switch>
    </div>
  );
}

export default withRouter(App);

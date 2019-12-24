import React from 'react';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Page from './Components/Page';
import Pagination from './Components/Pagination';

function App() {
  return (
    <Router>
      <Redirect to="/1" />
      <Route path="/:page" component={Pagination} />
      <Route path="/:page" component={Page} />
    </Router>
  );
}

export default App;

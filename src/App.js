import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Page from './Components/Page';
import Pagination from './Components/Pagination';

function App() {
  return (
    <Router>
      {/* <Switch> */}
      <Route path="/:page" component={Pagination} />
      <Route path="/:page" component={Page} />
      {/* </Switch> */}
    </Router>
  );
}

export default App;

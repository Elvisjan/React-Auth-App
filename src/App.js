import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="container">
      <Route path="/" exact component={Home} />
      <Route path="/staff" exact component={Staff} />
      <h1>Hello Bitch!</h1>
      </div>
     
    </div>
    </Router>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, Auth, CTF} from 'pages';
import {HeaderContainer} from 'containers/Base';




function App() {
  return (
    <div className="App">
        <HeaderContainer/>
          <Route exact path="/" component={Home}/>
          <Route path="/auth" component={Auth}/>
          <Route path="/ctf" component={CTF}/>
          
    </div>

  );
}

export default App;

import React, { Component } from 'react';
// import './App.css';
// import './Landing.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';
import Blog from './Blog';
import { Switch, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
       
        <Nav />
        
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/blog"  component={Blog}/>
        </Switch>

      </div>



    );
  }
}

export default App;

import React, { Component } from 'react'
import './App.css';
//Pages
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
//Components
import NavSpacer from './components/Nav/NavSpacer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export class App extends Component {

  render() {

    return (
      <Router>
        <div className="App">
          <Nav />
          <NavSpacer />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/projects" exact component={Projects}/>
            <Route path="/about" exact component={About}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App

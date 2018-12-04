import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header key="Header" />

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route component={NoMatch} />
        </Switch>

      </div>
    );
  }
}

const Header = () => (
  <header>
    <nav>
      <ul className="primary-nav">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/post/that-does-not-exists'>Post</Link></li>
      </ul>
    </nav>
  </header>
);

const Home = () => {
  return [
    <div key="Home">
      <h2>Home</h2>
    </div>
  ]
};

const About = () => {
  return [
    <div key="About">
      <h2>About</h2>
    </div>
  ]
};

const NoMatch = ({ location }) => [
  <div key="Error">
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
];


export default App;

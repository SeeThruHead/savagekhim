import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Scroll from 'react-scroll';

var scroll     = Scroll.animateScroll;

class App extends Component {
  scrollToBottom() {
    scroll.scrollTo(500);
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.scrollToBottom}>Click me</button>
      </div>
    );
  }
}

export default App;

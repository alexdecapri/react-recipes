import React, { Component } from 'react';
// import jsonp from 'jsonp';
// import Ajax from 'simple-ajax';
// import unirest from 'unirest';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;

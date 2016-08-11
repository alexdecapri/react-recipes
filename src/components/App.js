import React, { Component } from 'react';
import axios from 'axios';
import '../styles/App.css';

const API_KEY = '2bf85f602ad897ed67b5267d105df900';
const ROOT_URL = 'http://food2fork.com/api/search';

function fetchRecipes() {
  // const url = `${ROOT_URL}&q=${food}`;
  const url = `${ROOT_URL}&key=${API_KEY}&q=chicken`;
  return axios.get(url)
    .then(function(response) {
      console.log(response);
    })

}

fetchRecipes();

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

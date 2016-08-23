import React, { Component } from 'react';
import axios from 'axios';
// import jsonp from 'jsonp';
// import Ajax from 'simple-ajax';
// import unirest from 'unirest';
import '../styles/App.css';

const API_KEY = '2bf85f602ad897ed67b5267d105df900';
const ROOT_URL = 'https://food2-api.herokuapp.com/search';

function fetchRecipes() {
  // const url = `${ROOT_URL}&q=${food}`;
  // const url = `${ROOT_URL}?key=${API_KEY}&q=chicken`;
  const url = ROOT_URL;
  const key = API_KEY;
  const food = ""

  return axios.post(url, {
    "key": key,
    "q": food
  })
    .then(function(response) {
      console.log(response.data);
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

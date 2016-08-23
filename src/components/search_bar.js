import React, { Component } from 'react';
// import axios from 'axios';
//
// const API_KEY = '2bf85f602ad897ed67b5267d105df900';
// const ROOT_URL = 'https://food2-api.herokuapp.com/search';

// function fetchRecipes(food) {
//   const url = ROOT_URL;
//   const key = API_KEY;
//   // const food = this.state.term;
//
//   return axios.post(url, {
//     "key": key,
//     "q": food
//   })
//     .then(function(response) {
//       console.log(response.data.recipes);
//       this.setState({
//         recipes: response.data.recipes
//       })
//     })
// }

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  onButtonSubmit() {
    console.log(this.state.term);
    // fetchRecipes(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div>

        <div className="input-group">
          <input
            onChange={this.onInputChange.bind(this)}
            className="form-control"
            type="text"
            placeholder="Search for something good..."
            value={this.state.term}/>
          <span className="input-group-btn">
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.onButtonSubmit.bind(this)}>Search</button>
          </span>
        </div>

        <div>Value of the input: {this.state.term}</div>


      </div>

    )
  }
}

export default SearchBar;

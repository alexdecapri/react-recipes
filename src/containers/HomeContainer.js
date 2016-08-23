import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from '../components/search_bar';
import RecipeList from '../components/recipe_list';

const API_KEY = '2bf85f602ad897ed67b5267d105df900';
const ROOT_URL = 'https://food2-api.herokuapp.com/search';

class HomeContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    const url = ROOT_URL;
    const key = API_KEY;

    return axios.post(url, {
      "key": key,
      "q": "chicken"
    })
      .then((response) => {
        console.log(response.data.recipes);
        this.setState({
          recipes: response.data.recipes
        })
        console.log('this.state.recipes', this.state.recipes);
      })
  }

  render() {
    return (
      <div>
        <h2>React Recipes</h2>
        <SearchBar />
        <RecipeList recipes={this.state.recipes}/>
      </div>
    )
  }
}

export default HomeContainer;

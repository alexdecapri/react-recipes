import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from '../components/search_bar';
import RecipeList from '../components/recipe_list';

const API_KEY = '2bf85f602ad897ed67b5267d105df900';
const ROOT_URL = 'https://food2-api.herokuapp.com/search';

class HomeContainer extends Component {

  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.state = {
      term: ''
    };
  }

  componentWillMount() {
    // const url = ROOT_URL;
    // const key = API_KEY;
    //
    // return axios.post(url, {
    //   "key": key,
    //   "q": this.state.term
    // })
    //   .then((response) => {
    //     console.log(response.data.recipes);
    //     this.setState({
    //       recipes: response.data.recipes
    //     })
    //   })
  }

  handleSearch() {
    // const url = ROOT_URL;
    // const key = API_KEY;
    //
    // return axios.post(url, {
    //   "key": key,
    //   "q": this.state.term
    // })
    //   .then((response) => {
    //     console.log(response.data.recipes);
    //     this.setState({
    //       recipes: response.data.recipes
    //     })
    //   })
  }

  handleInputChange(event) {
    this.setState({
      term: event.target.value
    })
  }

  handleItemClick(rId) {
    const store = this.props.store.getRecipeStore();

    store.select(rId);
  }

  render() {
    const store = this.props.store.getRecipeStore();


    return (
      <div>
        <h2 className="text-center">React Recipes</h2>
        <SearchBar
          term={this.state.term}
          onSearch={this.handleSearch.bind(this)}
          onInputChange={this.handleInputChange} />
        <RecipeList
          store={this.props.store}
          recipes={store.get()}
          onItemClicked={this.handleItemClick}/>
      </div>
    )
  }
}

export default HomeContainer;

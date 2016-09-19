import React, { Component } from 'react';
import axios from 'axios';

import '../styles/App.css';

class AppStore {
  _initialized = false;
  _favoriteRecipes = [];
  _recipeStore;
  _changed;

  constructor(changed) {
    this._changed = changed;
    this._recipeStore = new RecipeStore(changed);
  }

  init() {
    if (this._initialized) {
      return;
    }

    this._recipeStore.retrieve();
  }

  getRecipeStore() {
    return this._recipeStore;
  }

  addRecipe(id) {
    this._favoriteRecipes.push(id);
  }
}

const API_KEY = '2bf85f602ad897ed67b5267d105df900';
const ROOT_URL = 'https://food2-api.herokuapp.com';

class RecipeStore {
  _selectedId;
  _recipes = [];
  _changed;

  constructor(changed) {
    this._selectedId = 0;
    this._changed = changed;
  }

  get() {
    return this._recipes;
  }

  select(id) {
    this._selectedId = id;
  }

  retrieveSelectedDetails(id) {
    if (id && id <= 0) {
      return;
    }

    return axios.post(`${ROOT_URL}/get`, {
        "key": API_KEY,
        "rId": id
      })
      .then((response) => {
        console.log("details: " + response.data);
        this._changed();
        return response;
      });
  }

  retrieve(term) {
    axios.post(`${ROOT_URL}/search`, {
        "key": API_KEY,
        "q": term || ''
      })
      .then((response) => {
        console.log(response.data.recipes);
        this._recipes = response.data.recipes;
        this._changed();
      });
  }
}

class App extends Component {
  _store;

  constructor(props, context) {
    super(props, context);
    this.changed = this.changed.bind(this);

    this._store = new AppStore(this.changed);
  }

  changed() {
    this.forceUpdate();
  }

  componentDidMount() {
    this._store.init();
  }

  render() {
    return (
      <div>
        {this.props.children
          && React.cloneElement(this.props.children, {
              store: this._store
            })}
      </div>
    );
  }
}

export default App;

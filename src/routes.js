import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomeContainer from './containers/HomeContainer';
import SavedRecipesContainer from './containers/SavedRecipesContainer';
import SingleRecipeContainer from './containers/SingleRecipeContainer';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomeContainer}/>
    <Route path="recipes/saved" component={SavedRecipesContainer} />
    <Route path='recipes/:id' component={SingleRecipeContainer} />
  </Route>
)

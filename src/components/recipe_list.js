import React from 'react';
import RecipeListItem from './recipe_list_item';

const RecipeList = (props) => {

  let recipeItems;
  if (props.recipes) {
    recipeItems = props.recipes.map((recipe) => (
      <RecipeListItem
        recipe={recipe}
        key={recipe.recipe_id}
        onItemClicked={() => props.onItemClicked(recipe.recipe_id)}/>
      ));
  } else {
    recipeItems = [];
  }

  return (
    <ul className="col-sm-8 col-sm-offset-2 list-group">
      {recipeItems}
    </ul>
  )
};

export default RecipeList;

import React from 'react';
import RecipeListItem from './recipe_list_item';

const RecipeList = (props) => {
  console.log(props.recipes);
  const recipeItems = props.recipes.map((recipe) => {
    return <RecipeListItem
      recipe={recipe}
      key={recipe.recipe_id} />
  });

  return (
    <ul className="col-md-4 list-group">
      {recipeItems}
    </ul>
  )
};

export default RecipeList;

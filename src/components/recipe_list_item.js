import React from 'react';

const RecipeListItem = (props) => {
  const recipe = props.recipe;

  return (
    <li className="list-group-item">
      <div className="media">
        <img className="media-object" src={recipe.image_url} />
      </div>
    </li>
  );
}

export default RecipeListItem;

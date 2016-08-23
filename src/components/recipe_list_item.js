import React from 'react';

const RecipeListItem = (props) => {
  const recipe = props.recipe;

  return (
    <li className="list-group-item">
      <div className="media">
        <div className="media-left">
          <img className="media-object" src={recipe.image_url} role="presentation"/>
        </div>
        <div className="media-body">
          <div className="media-heading">{recipe.title}</div>
          <h5><a href={recipe.publisher_url}>{recipe.publisher}</a></h5>
        </div>
      </div>
    </li>
  );
}

export default RecipeListItem;

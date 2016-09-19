import React from 'react';
import { Link } from 'react-router';

const RecipeListItem = ({ recipe, onItemClicked }) => {
  return (
    <li className="list-group-item">
      <div className="media">
        <div className="media-left">
          <img className="media-object" onClick={onItemClicked} src={recipe.image_url} role="presentation"/>
        </div>
        <div className="media-body">
          <Link to={`/recipes/${recipe.recipe_id}`}>
            <div className="media-heading">{recipe.title}</div>
          </Link>
          <h5><a href={recipe.publisher_url} target="_blank">{recipe.publisher}</a></h5>
        </div>
      </div>
    </li>
  );
}

export default RecipeListItem;

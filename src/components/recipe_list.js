import React from 'react';

const RecipeList = (props) => {
  console.log(props.recipes);
  return (
    <ul>
      <li>{props.recipes.length}</li>
    </ul>
  );
};

export default RecipeList;

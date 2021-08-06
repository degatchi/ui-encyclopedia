import React from 'react'
import Recipe from './Recipe'

const RecipeList = ({ recipes }) => {
    return (
        <div className='recipe-list'>
        <div>
            {/* For Loop */}
            {recipes.map(recipe => {
                // If recipe w/ id changes, it will only rerender that id
                return (<Recipe key={recipe.id} {...recipe}/>)
            })}
        </div>
        <div className='recipe-list__add-recipe-btn-container'>
            <button className='btn btn--primary'>Add Recipe</button>
        </div>
        </div>
    )
}

export default RecipeList

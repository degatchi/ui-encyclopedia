import React from 'react'
import Ingredient from './Ingredient'

// Loop through all ingreidents and render them out
const IngredientList = ({ ingredients }) => {
    const ingredientElements = ingredients.map(ingredient => {
        return <Ingredient key={ingredient.id} {...ingredient}/>
    })
    return (
        <div className='ingredient-grid'>
            {ingredientElements}
        </div>
    )
}

export default IngredientList

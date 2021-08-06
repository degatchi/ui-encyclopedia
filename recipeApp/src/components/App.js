import React, { useState } from 'react';
import RecipeList from './RecipeList'
import './../css/app.css'
import uuidv4 from 'uuid/v4'

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        { id: uuidv4(), name: 'Name', amount: '1 Tbs' }
      ]
    }
  
    setRecipes([...recipes, newRecipe])
  }

  return (
    <RecipeList 
      recipes={recipes}
      handleRecipeAdd={handleRecipeAdd}
    />
  )
}


const sampleRecipes = [
  {
    id: 1,
    name: 'plain chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Step 1\n2. Step 2\n3. Step 3',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'plain pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1. Step 1\n2. Step 2\n3. Step 3',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  }
]

export default App;

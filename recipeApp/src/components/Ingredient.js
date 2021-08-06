import React from 'react'

const Ingredient = ({ name, amount }) => {
    return (
        <>
            <span>{name}</span>
            <span>{amount}</span>
        </>
    )
}

export default Ingredient

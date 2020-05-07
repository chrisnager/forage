/** @jsx jsx */

import { FC, useState } from 'react'
import { Flex, jsx } from 'theme-ui'

import { ingredients } from '../data/ingredients.json'
import { IngredientName } from '../types'
import Products from './products'
import Search from './search'

const Main: FC = () => {
  const [chosenIngredient, setChosenIngredient] = useState()

  const handleSelect = (selection: IngredientName) => {
    const selectedIngredient = ingredients.find(({ name }) => name === selection)

    if (selectedIngredient !== undefined) {
      setChosenIngredient(selectedIngredient)
    }
  }

  return (
    <Flex as="main" sx={{ flex: 1, flexDirection: `column` }}>
      <Search onSelect={handleSelect} />
      <Products {...{ chosenIngredient }} />
    </Flex>
  )
}

export default Main

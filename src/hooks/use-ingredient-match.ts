import matchSorter from 'match-sorter'

import { ingredients } from '../data/ingredients.json'
import { Ingredient } from '../types'

interface UseIngredientMatchParams {
  term: string
}

export default function useIngredientMatch({ term }: UseIngredientMatchParams): Ingredient[] {
  return term.trim() === ``
    ? (ingredients as Ingredient[])
    : matchSorter(ingredients as Ingredient[], term, { keys: [(ingredient: Ingredient) => ingredient.name] })
}

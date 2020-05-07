/** @jsx jsx */

import { FC } from 'react'
import { Grid, jsx } from 'theme-ui'

import { ingredients } from '../data/ingredients.json'
import { products } from '../data/products.json'
import { Ingredient, Product } from '../types'
import { getProductImageSource } from '../utilities'

interface ProductsProps {
  chosenIngredient?: Ingredient
}

const Products: FC<ProductsProps> = ({ chosenIngredient }) => {
  const filteredProducts = (products as Product[]).filter((product) => {
    return chosenIngredient?.id !== undefined ? product.ingredient_ids.includes(chosenIngredient.id) : product
  })

  return (
    <div>
      <Grid
        as="ul"
        sx={{
          width: `100vw`,
          my: 0,
          px: 4,
          gap: 32,
          gridTemplateColumns: `repeat(auto-fill, minmax(288px, 1fr))`,
          listStyleType: `none`,
        }}
      >
        {filteredProducts.map(({ name, collection, ingredient_ids }) => (
          <li key={name} sx={{ mb: 5 }}>
            <img
              sx={{ width: `100%`, borderRadius: 4, display: `block` }}
              src={getProductImageSource(name)}
              alt={name}
            />
            <h2 sx={{ mb: 0 }}>{name}</h2>
            <p sx={{ borderRadius: 4, py: 1, px: 2, display: `inline-block`, textTransform: `capitalize`, bg: `tag` }}>
              {collection}
            </p>
            <div>
              {ingredient_ids.map((id, index) => (
                <i key={id}>
                  {index ? `, ` : ``}
                  {(ingredients as Ingredient[]).find((i: Ingredient) => i.id === id)?.name}
                </i>
              ))}
            </div>
          </li>
        ))}
      </Grid>

      {filteredProducts.length === 0 && (
        <h2 data-testid="no-results-message" sx={{ my: 0, p: 4 }}>
          Our apologies. No available products include {chosenIngredient?.name}.
        </h2>
      )}
    </div>
  )
}

export default Products

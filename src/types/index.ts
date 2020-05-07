export type IngredientName =
  | `Organic Acai Berry`
  | `Organic Cherry`
  | `Organic Banana`
  | `Organic Blueberry`
  | `Organic Kale`
  | `Hazelnuts`
  | `Ginger`
  | `Apples`
  | `Organic Raspberry`
  | `Avocado`
  | `Organic Flax Seeds`
  | `Organic Spinach`
  | `Lemon`
  | `Celery`
  | `Cucumber`
  | `Beets`
  | `Macadamia Nut`
  | `Celery`
  | `Cinnamon`
  | `Oats`
  | `Maple`
  | `Organic Butternut Squash`
  | `Mushrooms`
  | `Seaweed`
  | `Miso`
  | `Cacao`

export interface Ingredient {
  name: IngredientName
  id: number
  is_allergen: boolean
}

export interface Result {
  id: number
  name: IngredientName
}

export type ProductName =
  | `Acai + Cherry`
  | `Chocolate + Blueberry`
  | `Beet + Avocado Poke`
  | `Cinnamon + Banana`
  | `Mushroom + Miso`
  | `Ginger + Greens`

export type ProductCollection = `smoothie` | `harvest bowl` | `oat bowl` | `soup`

export interface Product {
  id: number
  name: ProductName
  collection: ProductCollection
  ingredient_ids: number[]
}

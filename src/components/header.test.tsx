import { render } from '@testing-library/react'
import React from 'react'

import Header from './header'

test(`renders header title`, () => {
  const { getByText } = render(<Header />)
  const titleElement = getByText(/Forage/)
  expect(titleElement).toBeInTheDocument()
})

test(`renders header description`, () => {
  const { getByText } = render(<Header />)
  const descriptionElement = getByText(/Search products by ingredient. Try typing "Organic Banana"./)
  expect(descriptionElement).toBeInTheDocument()
})

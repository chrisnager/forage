import { act, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import Main from './main'

test(`renders no results message when an unused ingredient is chosen`, async () => {
  const { getByTestId, getByRole } = render(<Main />)

  // Focus the search bar
  const searchBar = getByTestId(`search-bar`)
  userEvent.click(searchBar)
  expect(searchBar).toHaveFocus()

  // Type "Lemon" in the search bar
  await userEvent.type(searchBar, `Lemon`)
  expect(searchBar).toHaveValue(`Lemon`)

  // Select "Lemon" as an ingredient
  const searchOption = getByRole(`option`)
  userEvent.click(searchOption)

  // Display no results for "Lemon" message
  const noResultsMessage = getByTestId(`no-results-message`)
  expect(noResultsMessage).toBeInTheDocument()
  expect(noResultsMessage).toHaveTextContent(`Our apologies. No available products include Lemon.`)
})

test(`renders expected product results when a used ingredient is chosen`, async () => {
  const { getByTestId, getByRole, getByText } = render(<Main />)

  // Focus the search bar
  const searchBar = getByTestId(`search-bar`)
  userEvent.click(searchBar)
  expect(searchBar).toHaveFocus()

  // Type "Organic Banana" in the search bar
  await act(() => userEvent.type(searchBar, `Organic Banana`))
  expect(searchBar).toHaveValue(`Organic Banana`)

  // Select "Organic Banana" as an ingredient
  const searchOption = getByRole(`option`)
  userEvent.click(searchOption)

  // Display results for "Organic Banana"
  const acaiCherry = getByText(`Acai + Cherry`)
  expect(acaiCherry).toBeInTheDocument()

  const chocolateBlueberry = getByText(`Chocolate + Blueberry`)
  expect(chocolateBlueberry).toBeInTheDocument()

  const cinnamonBanana = getByText(`Cinnamon + Banana`)
  expect(cinnamonBanana).toBeInTheDocument()

  const gingerGreens = getByText(`Ginger + Greens`)
  expect(gingerGreens).toBeInTheDocument()
})

/** @jsx jsx */

import '@reach/combobox/styles.css'

import { Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover } from '@reach/combobox'
import { ChangeEvent, FC, useState } from 'react'
import { Box, jsx } from 'theme-ui'

import useIngredientMatch from '../hooks/use-ingredient-match'
import { IngredientName, Result } from '../types'

interface SearchProps {
  onSelect: (selection: IngredientName) => void
}

const Search: FC<SearchProps> = ({ onSelect }) => {
  const [term, setTerm] = useState(``)

  const results = useIngredientMatch({ term })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  }

  return (
    <Box sx={{ p: 4 }}>
      <Combobox aria-label="Choose an ingredient" openOnFocus {...{ onSelect }}>
        <ComboboxInput
          data-testid="search-bar"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Search…"
          sx={{ boxSizing: `border-box`, width: `100%`, py: 2, px: 3, fontSize: 3 }}
        />
        {results && (
          <ComboboxPopover>
            {results.length > 0 ? (
              <ComboboxList>
                {results.map((result: Result) => (
                  <ComboboxOption
                    key={result.id}
                    value={result.name}
                    sx={{ boxSizing: `border-box`, py: 2, px: 3, fontSize: 3 }}
                  />
                ))}
              </ComboboxList>
            ) : (
              <div sx={{ py: 2, px: 3 }}>No ingredients found</div>
            )}
          </ComboboxPopover>
        )}
      </Combobox>
    </Box>
  )
}

export default Search

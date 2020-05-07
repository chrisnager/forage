/** @jsx jsx */

import { FC } from 'react'
import { jsx } from 'theme-ui'

const Header: FC = () => {
  return (
    <header sx={{ p: 4, bg: `section` }}>
      <h1 sx={{ mt: 0, mb: 2 }}>
        Forage{` `}
        <span role="img" aria-label="Avocado">
          🥑
        </span>
      </h1>
      <p sx={{ my: 0 }}>Search products by ingredient. Try typing "Organic Banana".</p>
    </header>
  )
}

export default Header

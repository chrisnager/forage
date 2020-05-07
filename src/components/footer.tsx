/** @jsx jsx */

import { FC } from 'react'
import { jsx } from 'theme-ui'

const Footer: FC = () => {
  return (
    <footer sx={{ p: 4, bg: `section` }}>
      <p sx={{ my: 0 }}>
        <small>
          2020 Chris Nager
          <span> &middot; </span>
          <a
            href="https://www.notion.so/chrisnager/Forage-f481e9bff0d248f7b97e3a86de883902"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tech spec
          </a>
          <span> &middot; </span>
          <a href="https://github.com/chrisnager/forage" target="_blank" rel="noopener noreferrer">
            Source
          </a>
        </small>
      </p>
    </footer>
  )
}

export default Footer

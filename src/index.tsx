import { Global } from '@emotion/core'
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'theme-ui'

import App from './components/app'
import theme from './constants/theme'

ReactDOM.render(
  <ThemeProvider {...{ theme }}>
    <Global styles={(theme) => `body { font: 1.25em/1.5 ${theme.fonts.body} } a { color: inherit }`} />
    <App />
  </ThemeProvider>,
  document.getElementById(`root`),
)

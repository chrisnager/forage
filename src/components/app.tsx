/** @jsx jsx */

import { FC } from 'react'
import { Flex, jsx } from 'theme-ui'

import Footer from './footer'
import Header from './header'
import Main from './main'

const App: FC = () => {
  return (
    <Flex sx={{ minHeight: `100vh`, flexDirection: `column` }}>
      <Header />
      <Main />
      <Footer />
    </Flex>
  )
}

export default App

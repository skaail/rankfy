import React from 'react'
import Layout from './Components/Layout/Layout'
import Routes from './Routes'
import { GlobalStyle } from './styles/globalStyles';

const App = () => {
    return (
      <>
        <GlobalStyle />
        <Layout>
          <Routes />
        </Layout>
      </>

    )
}

export default App
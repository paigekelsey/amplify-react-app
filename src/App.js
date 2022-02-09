import React, { useState } from 'react'
import { ChakraProvider } from "@chakra-ui/react"

import Navbar from './components/Navbar'
import MainDataTable from './components/MainDataTable';

import CreatedCntxt from './contexts/createdContext'

import { withAuthenticator } from '@aws-amplify/ui-react'

function App({ Component }) {
  const [createdFlg,setCreatedflag]=useState(false)
  return (
    <CreatedCntxt.Provider value={[createdFlg,setCreatedflag]}>
    <ChakraProvider>
    <div className="mainContainer">
      <Navbar />
      <MainDataTable />
    </div>
    </ChakraProvider>
    </CreatedCntxt.Provider>
  );
}

export default withAuthenticator(App);

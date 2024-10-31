import { useState } from 'react'

import './App.css'
import SimpleForm from './Compounds/SimpleForm/SimpleForm'
import StateForm from './Compounds/SimpleForm/StateForm/StateForm'
import RefFrom from './Compounds/RefForm/RefFrom'
import Grandpa from './Compounds/Grandpa/Grandpa'

function App() {
 

  return (
    <>
      
      <SimpleForm></SimpleForm>
      <StateForm></StateForm>
      <RefFrom></RefFrom>




      <Grandpa></Grandpa>
    </>
  )
}

export default App

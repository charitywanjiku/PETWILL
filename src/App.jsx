import React from 'react'
import Form from './components/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TeamTable from './components/TeamTable';

function App () {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/Team" element={<TeamTable/>}/>
      <Route path="/Profile" element={<Form />}/>
    </Routes>
    </BrowserRouter>
    <Form />
    </>

    
  )
}

export default App;
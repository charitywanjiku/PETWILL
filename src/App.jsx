import React from 'react'
import Form from './components/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App () {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/form" element={<Form />}/>
    </Routes>
    </BrowserRouter>
    <Form />
    </>

    
  )
}

export default App;
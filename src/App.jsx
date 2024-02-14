import Form from './components/Form';
import { Route, Routes } from 'react-router-dom';
import TeamTable from './components/TeamTable';

function App () {
  return (
    <>
    <Routes>
      <Route path="/Team" element={<TeamTable/>}/>
      <Route path="/Profile" element={<Form />}/>
    </Routes>
    </>

    
  )
}

export default App;
import { UpdateTheme,UseTheme } from "./Theme";
import Bar from "./components/Charts/BarChart";
import SideBar from "./components/SideBar";
import TopNav from "./components/TopNav";
import { Route, Routes } from "react-router-dom";
import Pie from "./components/Charts/PieChart";
import Line from "./components/Charts/Line";
import FAQ from "./components/FAQ.jsx";
import Form from './components/Form';
import TeamTable from './components/TeamTable';
function App () {
  const darkTheme=UseTheme()
  const toggleColor=UpdateTheme()
  const ThemeStyles={
    backgroundColor:darkTheme?"rgb(10,10,30)":"rgb(240,250,250)",
    color:darkTheme?"rgb(230,230,230)":"rgb(10,10,30)"
  }
  return (
    <div className="app" style={ThemeStyles}>
      <SideBar/>
      <main className="content">
      <TopNav toggleColor={toggleColor} darkTheme={darkTheme}/> 
      <Routes>
        <Route path="/Bar" element={<Bar/>}/>
        <Route path="/Pie" element={<Pie/>}/>
        <Route path="/Line" element={<Line/>}/>
        <Route path="/FAQ" element={<FAQ ThemeStyles={ThemeStyles}/>}/>
        <Route path="/Team" element={<TeamTable/>}/>
        <Route path="/Profile" element={<Form />}/>
      </Routes> 
      </main>
     
     </div>

  
  )
}

export default App;
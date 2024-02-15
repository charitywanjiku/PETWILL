
import MyCalendar from "./components/Calendar";
import Dashboard from "./components/Dashboard";
import Item from "./components/Item";
import { Routes ,Route } from "react-router-dom";
import Reports from "./components/Reports";
import { UpdateTheme,UseTheme } from "./Theme";
import Bar from "./components/Charts/BarChart";
import SideBar from "./components/SideBar";
import TopNav from "./components/TopNav";

import Pie from "./components/Charts/PieChart";
import Line from "./components/Charts/Line";
import FAQ from "./components/FAQ.jsx";
import Form from './components/Form';
import TeamTable from './components/TeamTable';
import ContactInformation from "./components/ContactInformation.jsx";
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
        <Route path="/Contact" element={<ContactInformation />}/>
      </Routes> 
      </main>
     
     </div>

  
  )
}

export default App;
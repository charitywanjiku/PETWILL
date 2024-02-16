import { UpdateTheme,UseTheme } from "./Theme";
import Bar from "./components/Charts/BarChart";
import SideBar from "./components/SideBar";
import TopNav from "./components/TopNav";
import { Routes, Route } from "react-router-dom"
import Pie from "./components/Charts/PieChart";
import Line from "./components/Charts/Line";
import FAQ from "./components/FAQ";
import Form from './components/Form';
import TeamTable from './components/TeamTable';
import ContactInformation from "./components/ContactInformation";
function App () {
  const darkTheme=UseTheme() //usetheme hook
  const toggleColor=UpdateTheme() //button hook
  //create the themes
  const ThemeStyles={
    backgroundColor:darkTheme?"rgb(10,10,30)":"rgb(240,250,250)",
    color:darkTheme?"rgb(230,220,220)":"rgb(10,10,30)",
    
  }
  return (

    <div className="app overflow-hidden" style={ThemeStyles}>
      <SideBar/>
    <main className="content">
      <TopNav toggleColor={toggleColor} darkTheme={darkTheme}/> 
      {/* Routes */}
      <Routes>
        <Route path="/Bar" element={<Bar ThemeStyles={ThemeStyles}/>}/>
        <Route path="/Pie" element={<Pie/>}/>
        <Route path="/Line" element={<Line/>}/>
        <Route path="/FAQ" element={<FAQ ThemeStyles={ThemeStyles}/>}/>
        <Route path="/Team" element={<TeamTable/>}/>
        <Route path="/Profile" element={<Form ThemeStyles={ThemeStyles} />}/>
        <Route path="/" element={<Dashboard ThemeStyles={ThemeStyles}/>}/>
        <Route path="/Calendar" element={<MyCalendar/>}/>
        <Route path="/Item" element={<Item ThemeStyles={ThemeStyles}/>}/>
        <Route path="/Profile" element={<Form />}/>
        <Route path="/Contacts" element={<ContactInformation />}/>
      </Routes> 
      </main>
     
     </div>

  
  )
}

export default App;
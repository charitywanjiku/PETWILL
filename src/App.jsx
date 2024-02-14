
import MyCalendar from "./components/Calendar";
import Dashboard from "./components/Dashboard";
import Item from "./components/Item";
import { Routes ,Route } from "react-router-dom";
import Reports from "./components/Reports";



function App () {
  return (
    <div>
     
      <main>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/Calendar" element={<MyCalendar/>}/>
        <Route path="/Item" element={<Item/>}/>
        <Route path="/Reports" element={<Reports/>}/>          
      </Routes>
 </main>
       </div>

  
  )
}

export default App;
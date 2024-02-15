
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react"
import { Box, IconButton} from "@mui/material";
import {Link} from "react-router-dom"
import CottageIcon from '@mui/icons-material/Cottage';
import GroupIcon from '@mui/icons-material/Group';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import ContactPage from "@mui/icons-material/ContactPage";

const Item=({title,to,icon,isSelected,setSelected})=>{
    return(
    <Link to={to}>  
    <MenuItem
    active={isSelected===title}
    onClick={()=>setSelected(title)}
    style={{color:"rgb(200,200,200)"}}
    icon={icon}
    >
      <h4 className="bg-transparent text-sm" color="rgb(255,240,200)">{title}</h4> 
      
    </MenuItem>
    </Link>
     
   
    
  )
   
  }


function SideBar() {
    const [isSelected, setSelected]=useState("Dashboard")
    const [isCollapsed, setCollapsed]=useState(false)
  return (
    <div className="flex-col bg-blue-950 h-screen w-fit">
    
    
    <Box class="flex-col bg-blue-950">
   
<Sidebar collapsed={isCollapsed} class="bg-sky-950 text-slate-200">
<Menu className="bg-sky-950">
<Box>
<MenuItem
        class="text-slate-200 justify-between"
        onClick={()=>setCollapsed(!isCollapsed)}
        icon={isCollapsed?<MenuIcon/>:undefined }
    
        style={{margin:"10px 0", cursor:"pointer"}}>
        {!isCollapsed&&(
             <Box class='flex justify-between p-3'>
         <h1>ADMIN</h1>
            <IconButton class="text-slate-200" onClick={()=>setCollapsed(!isCollapsed)}>
                <MenuIcon/>
            </IconButton>
            </Box>
        )}
       
           
        </MenuItem>

    </Box>
    {!isCollapsed &&(
        <Box>
         <Box class="mt-3">
    <img id="admin" className="mx-auto" src="https://avatars.githubusercontent.com/u/152304981?v=4" width="100px" height="100px"/>
</Box>   
 <Box class="mt-3">
   <h1 className="text-2xl text-center text-white font-bold">Charity Wanjiku</h1>
   <h5 className="text-center text-green-600">SCRAM MASTER</h5>
</Box>  
 </Box>
      
    )}
  
</Menu>
<Menu className="bg-sky-950">
<Box paddingLeft={!isCollapsed? undefined: "10%"}>
    
        <Item
        icon={<CottageIcon/>}
        title="Dashboard"
        onClick={()=>setSelected(!isSelected)}
         to="/"
      />
    
     <h1 className="text-slate-500">Data</h1>
      <Box>
      <Item
        icon={<GroupIcon/>}
        title="Manage Team"
        onClick={()=>setSelected(!isSelected)}
        to="/Team"
      />
</Box>
<Box> 
<Item
        icon={<ContactPage/>}
        title="Contact Information"
        onClick={()=>setSelected(!isSelected)}
        to="/Contacts"
      />
      </Box>
     <Box>
        <Item
        icon={<ReceiptIcon/>}
        title="Materials"
        onClick={()=>setSelected(!isSelected)}
        to="/Item"
      />
     </Box>
    
      
      <h1 className="text-slate-500">Pages</h1>
      <Box>
        <Item
        icon={<AccountBoxIcon/>}
        title="Profile Form"
        onClick={()=>setSelected(!isSelected)}
        to="/Profile"
      />
     </Box>
     <Box>
        <Item
        icon={<CalendarMonthOutlinedIcon/>}
        title="Calendar"
        onClick={()=>setSelected(!isSelected)}
        to="/Calendar"
      />
     </Box>
     <Box>
        <Item
        icon={<QuizOutlinedIcon/>}
        title="FAQ"
        onClick={()=>setSelected(!isSelected)}
        to="/FAQ"
      />
     </Box>
     <h1 className="text-slate-500">Charts</h1>
     <Box>
        <Item
        icon={<BarChartOutlinedIcon/>}
        title="Bar Chart"
        onClick={()=>setSelected(!isSelected)}
        to="/Bar"
      />
       <Box>
        <Item
        icon={<PieChartOutlineOutlinedIcon/>}
        title="Pie Chart"
        onClick={()=>setSelected(!isSelected)}
        to="/Pie"
      />
     </Box>
     <Box>
        <Item
        icon={<SsidChartOutlinedIcon/>}
        title="Line Chart"
        onClick={()=>setSelected(!isSelected)}
        to="/Line"
      />
     </Box>
   
     </Box>
</Box>

</Menu>



</Sidebar>
    </Box>

      
    </div>
  )
}

export default SideBar

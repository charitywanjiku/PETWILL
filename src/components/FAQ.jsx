import React, { useEffect, useState } from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
function FAQ({ThemeStyles}) {
    const [isCollapsed, setIsCollapsed]=useState(true)
    const [feedbacks, setFeedbacks]=useState([])

    function toggleCollapsed(index){
      setFeedbacks(prevFeedbacks => {
        const updatedFeedbacks = [...prevFeedbacks];
        updatedFeedbacks[index].isCollapsed = !updatedFeedbacks[index].isCollapsed;
        return updatedFeedbacks;
      });
  
    }
console.log(feedbacks)
    useEffect(()=>{
fetch('http://localhost:3000/Feedbacks')
.then(res=>res.json())
.then(data=>setFeedbacks(data))
    },[])
    console.log(feedbacks)
  return (
    <div className='h-screen' style={ThemeStyles}>
    <h1 className='text-xl text-green-600'>Feedbacks and FAQs</h1>
    <div>
       {
feedbacks.map((feeds,index)=>{
    return(
        <div onClick={()=>toggleCollapsed(index)} className='accordition flex rounded-md shadow-xl justify-between ml-10 mt-2 pl-3 pr-3 bg-zinc-900 w-3/4  border-stone-600 border-y-2' key={index}>
        <div className={feeds.isCollapsed?"maxHeight":"minHeight"}>
        <h3 className="text-lg text-emerald-300 font-semibold">{feeds.Name}</h3>
        <h5  className={feeds.isCollapsed?"Visible":"Unvisible"}>{feeds.Feedback}</h5></div>
      
        <div>
  <button onClick={()=>toggleCollapsed(index)}>
<IconButton style={ThemeStyles}>
   {feeds.isCollapsed?<ExpandLessIcon/>:<ExpandMoreIcon/>}
</IconButton>
       
        </button>
        </div>
       
        </div>
    )
})
      }
     
    </div>
     
    </div>
  )
}

export default FAQ

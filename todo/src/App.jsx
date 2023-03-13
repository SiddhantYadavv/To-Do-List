import React from 'react'
import Navbar from "./components/Navbar"
import "./App.css"
import Tasks from './components/Tasks'


function App() {
  const [Task,setTask]=React.useState([])
  const [Title,setTitle]=React.useState()
  const [Description,setDesc]=React.useState()

  

  function handle(e){
    e.preventDefault()
    if (Title === "" ){

    } else {
      setTask([...Task,{Title,Description}])
      setTitle("")
      setDesc("")
    }
    
   
  }

 function deleteTask(index){
  const filteredArray= Task.filter((val,i)=>{
    return i!==index
  })
  setTask(filteredArray)
 }
 

  return (
    <>
    <Navbar/>
    <form onSubmit={handle}>
    <div className='Body'>
      <input 
        type="text"
        name='TaskName'
        placeholder='Task'
        value={Title}
        onChange={(e)=>setTitle(e.target.value)}
        
        />
     <input 
        type="text"
        name='Description'
        placeholder='Description'
        value={Description}
        onChange={(e)=>setDesc(e.target.value)}
       
        
       />
       <button >ADD TASK</button>
       {/* <h3>Title goes here: {Title} <br/> Description goes here: {Description}</h3> */}
      
       
</div>
</form>
  
{Task.map((item,index)=>{
  return(
    <Tasks 
    key={index} 
    Title={item.Title} 
    Description={item.Description}
    func={deleteTask}
    i={index}
    />
  )
})}


       </>
    
  )
}

export default App
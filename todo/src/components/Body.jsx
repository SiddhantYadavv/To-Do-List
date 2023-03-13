import React from 'react'

function Body() {
  const [Task,setTask]=React.useState({
    TaskName:"", Description:""
  })

  function handleChange(event){
    setTask((prev)=>{
      return {
        ...prev,
        [event.target.name]:event.target.value
      }
    })
  }
  console.log(Task)

  return (
    <>
    <div className='Body'>
      <input 
        type="text"
        name='TaskName'
        placeholder='Task'
        value={Task.TaskName}
        onChange={handleChange}
        />
     <input 
        type="text"
        name='Description'
        placeholder='Description'
        value={Task.Description}
        onChange={handleChange}
       />
       <button>ADD TASK</button>
</div>
       </>
  )
}

export default Body
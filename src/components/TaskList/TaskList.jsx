import React from 'react'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {

  return (
    <div id='task-list'className='h-[55%] overflow-x-auto flex items-center justify-start gap-6 flex-nowrap w-full bg-purple-500 mt-10'>
      
      {data && data.tasks && data.tasks.map((elem)=>{

         if(elem.active){
            return <AcceptTask key={elem.taskNumber} data={elem} />
         }
         if(elem.newTask){
            return <NewTask key={elem.taskNumber} data={elem}/>
         }
         if(elem.completed){
            return <CompleteTask key={elem.taskNumber} data={elem}/>
         }
         if(elem.failed){
            return <FailedTask key={elem.taskNumber} data={elem}/>
         }
      })}
      
      
      
      
      
      
      
      {/* <AcceptedTask />
      <NewTask />
      <CompleteTask />
      <FailedTask /> */}
        
    </div>

  )
}
export default TaskList

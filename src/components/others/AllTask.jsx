import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5  '>
        <div className='text-lg font-medium bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
         <h2 className='text-lg font-medium w-1/5 text-white font-bold'>Employee Name</h2>
        <h3 className= 'text-lg font-medium w-1/5 text-white font-bold'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5 text-white font-bold'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5 text-white font-bold'>Completed</h5>
        <h5 className='text-lg font-medium w-1/5 text-white font-bold'>Failed</h5>
    </div>
     <div className= ''>
           {userData.map(function(elem){
            return <div key={elem.id} className='bg-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
         <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
        <h3 className= 'text-lg font-medium w-1/5 text-blue-100'>{elem.taskCounts.newTask}</h3>
        <h5 className='text-lg font-medium w-1/5 text-green-100'>{elem.taskCounts.active}</h5>
        <h5 className='text-lg font-medium w-1/5 text-yellow-100'>{elem.taskCounts.completed}</h5>
        <h5 className='text-lg font-medium w-1/5 text-red-100'>{elem.taskCounts.failed}</h5>
    </div>



        })}
     </div>

     
        </div>
   )
}

export default AllTask

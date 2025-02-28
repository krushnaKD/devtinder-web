import React from 'react'
import { useSelector } from 'react-redux'

const Feed = () => {

const user = useSelector((store)=>store.user)
  console.log(user);
  
  return (
    <div className=''>
     {user && <div className="flex flex-col gap-2 items-center justify-center" >
     <h1 className='text-3xl font-semibold text-center my-20'>Welcome {user.firstName}!</h1>
       
       <img className='w-62 h-62 rounded-full object-cover' src={user.photoUrl} alt="" />
     </div>}

    </div>
  )
}

export default Feed

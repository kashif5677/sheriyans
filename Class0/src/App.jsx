import React, { useState } from 'react'
import Card from './../components/Card';

function App() {

  const [userName,setUserName]=useState('')
  const [userRole,setUserRole]=useState('')
  const [imageURL,setImageURL]=useState('')
  const [userDesc,setUserDesc]=useState('')

  const [allUsers,setUsers]=useState([])

const deleteHandler=(idx)=>{
  const copyusers=[...allUsers]
  copyusers.splice(idx,1)
  setUsers(copyusers)

}


  const submitHandler=(e)=>{
    e.preventDefault()

    const oldUsers=[...allUsers]

    console.log(oldUsers);
    oldUsers.push({userName,userRole,userDesc,imageURL})
    
    setUsers(oldUsers)

    setUserName('')
    setUserRole('')
    setImageURL('')
    setUserDesc('')    
    
  }

  return ( 
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex flex-wrap p-2 '>
        
        <input 
        value={userName}
        onChange={(e)=>{
          setUserName(e.target.value)
        }}
        className='border-2 px-5 py-2 rounded m-2 w-[45%]' type="text" placeholder='Enter your name'/>
        <input 
          value={imageURL}
          onChange={(e)=>{
            setImageURL(e.target.value)
          }}
        className='border-2 px-5 py-2 rounded m-2 w-[45%]' type="text" placeholder='Image URL' />
        <input 
          value={userRole}
          onChange={(e)=>{
            setUserRole(e.target.value)
          }}
          
        className='border-2 px-5 py-2 rounded m-2 w-[45%]' type="text" placeholder='Enter role' />
        <input 
          value={userDesc}
          onChange={(e)=>{
            setUserDesc(e.target.value)
          }}
        className='border-2 px-5 py-2 rounded m-2 w-[45%]' type="text" placeholder='Enter Description' />
       
       <button className='px-5 py-2 active:scale-95 bg-emerald-700 m-2 w-[90%]'>Create User</button>
      </form>

      <div className='px-2 py-10 flex flex-wrap gap-5'>
       {allUsers.map(function(elem,idx){
        return <Card idx={idx} elem={elem} deleteHandler={deleteHandler}/>
       })}
      </div>
 
    </div>
  )
}

export default App

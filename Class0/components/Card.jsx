import React from 'react'

function Card( props) {
  return (
     <div  className='w-[24vw] lg:bg-green-00 flex flex-col items-center rounded-xl text-center h-80 bg-white text-black'>
        

     <img className='h-20 w-20 rounded-full' src="https://images.unsplash.com/photo-1768321140160-a3ee91beb1c1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <h1 className='text-xl font-semibold'>{props.elem.userName}</h1>
      <h5 className='text-base text-blue-500 my-3 '>{props.elem.userRole}</h5>
      <p className='text-sm font-medium'>{props.elem.userDesc}</p>
      <button  onClick={()=>{
        props.deleteHandler(props.idx)
      }} className='px-4 py-2  text-white text-xs rounded active:scale-90 cursor-pointer bg-red-700'>remove</button>
        </div>
  )
}

export default Card

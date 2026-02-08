import React from 'react'

<<<<<<< HEAD
function Navbar(props) {
  return (
    <div style={{backgroundColor:props.color}} className='bg-emerald-700 flex itmes-center justify-between text-white px-8 py-5'>
      <h2> {props.title}</h2>
      <div className='flex gap-10'>
        {props.links.map(function(e,idx){
          return <h4 key={idx}>{e}</h4>
        })}
      </div>

=======
function Navbar() {
  return (
    <div className='bg-emerald-700 h-10'>
>>>>>>> d5e2b38e8aaabf6c389ea8700406f3ed6d9b1c72
      
    </div>
  )
}

export default Navbar

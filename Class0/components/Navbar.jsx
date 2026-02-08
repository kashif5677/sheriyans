import React from 'react'

function Navbar(props) {
  return (
    <div style={{backgroundColor:props.color}} className='bg-emerald-700 flex itmes-center justify-between text-white px-8 py-5'>
      <h2> {props.title}</h2>
      <div className='flex gap-10'>
        {props.links.map(function(e,idx){
          return <h4 key={idx}>{e}</h4>
        })}
      </div>

      
    </div>
  )
}

export default Navbar

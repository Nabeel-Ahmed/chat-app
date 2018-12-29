import React from 'react'

export default function input(props) {
  return (
    <div>
         <input name={props.name} type={props.type}> 
         {props.contenting}
         </input>
      
    </div>
  )
}

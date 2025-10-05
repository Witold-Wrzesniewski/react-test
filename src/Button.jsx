import { useState, useEffect } from "react"

export function Button({show, setShow, color}){

  

 

  return(
      <button onClick={() => setShow(!show)} style={{backgroundColor: color}}>
        <p>{show ? 'Hide' : 'Show'}</p>
      </button>
  )
}
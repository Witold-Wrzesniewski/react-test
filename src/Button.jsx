import { useState, useEffect } from "react"

export function Button({color}){

  const [count, setCount] = useState(0);

  function handleEvent(){
    setCount(count + 1);
  }

  useEffect(() => {
    console.log('State is now equal to ' + count);
  },[count]);

  return(
      <button onClick={() => handleEvent()} style={{backgroundColor: color}}>
        <p>{count}</p>
      </button>
  )
}
import {state, useState} from 'react'

function Textbox(){

  const [text, setText] = useState("");

  function handleEvent(e){
    setText(e.target.value);
    console.log('Text has just changed');
    console.log(e);
  }

  return(
    <>
      <input onChange={(e) => handleEvent(e)}></input>
      <p>{text}</p>
    </>
  )
}
export default Textbox
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ButtonSection} from './ButtonSection'
import {Button} from './Button'
import Textbox from './Textbox'
import { TextBlock } from './TextBlock'
import { StoreItem } from './StoreItem'

function App() {
  const [showItem, setShowItem] = useState(false);

  const arr = ['japki', 'czikpi', 'babki', 'piwki', 'lodki'];

  const item1 = {title: 'Bat', desc: 'Metal baseball bat', price: 50};
  const item2 = {title: 'Ball', desc: 'Baseball ball', price: 5};
  const item3 = {title: 'Helmet', desc: 'Baseball helmet', price: 30};

  const myArray = [item1, item2, item3];

  function HandleShow({show}){
    if (show)
      return <StoreItem item={item1}/>
  }

  return (
    <>
      {/*arr.map((elem, i) => <TextBlock key={i}>{elem}</TextBlock>)*/}<br/>
      {/*myArray.map((elem, i) => <StoreItem key={i} title={elem.title} desc={elem.desc} price={elem.price} />)*/}
      {/*myArray.map((elem, i) => <StoreItem key={i} item={elem} />)*/}
      <Button show={showItem} setShow={setShowItem}/>
      {/*showItem && <StoreItem item={item1} />*/}
      <HandleShow show={showItem} />
    </>
  )
}

export default App

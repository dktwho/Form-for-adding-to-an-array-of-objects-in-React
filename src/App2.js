


import React from 'react'
import { useState } from 'react';
import {v4 as uuid} from 'uuid'

const initProds = [
	{id: id(), name: 'prod1', catg: 'catg1', cost: 100},
	{id: id(), name: 'prod2', catg: 'catg2', cost: 200},
	{id: id(), name: 'prod3', catg: 'catg3', cost: 300},

];

function id() {
  return uuid()
}



const App2 = () => {

  const [prods, setProds] = useState(initProds)
  const [value1, setValue1] = useState(null)
  const [value2, setValue2] = useState(null)
  const [value3, setValue3] = useState(null)


  const result = prods.map(prod => {
    return <div key={prod.id}>
     <table border='2px' cellPadding='3'>
        <tbody>
          <tr> name
            <td>{prod.name}</td>
            <td>{prod.catg}</td>
            <td>{prod.cost}</td>
          </tr>
        </tbody>
      </table>
    </div>
  })

  function addItem() {
    let newElem = {
      id: id(),
      name: value1,
      catg: value2,
      cost: value3,
    }
    setProds([...prods, newElem])
    setValue1('')
    setValue2('')
    setValue3('')
  }



  return (
    <div className='App'>
      {result}
      <input value={value1} onChange={(e) => setValue1(e.target.value)} />
      <input value={value2} onChange={(e) => setValue2(e.target.value)} />
      <input value={value3} onChange={(e) => setValue3(e.target.value)} /> <br />
      <button onClick={addItem}>Add new elem</button>
      
      
    </div>
  )
}

export default App2

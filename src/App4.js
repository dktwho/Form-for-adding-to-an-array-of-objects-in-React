

import React, { useState } from 'react'
import {v4 as uuid} from 'uuid'

const initProds = [
	{id: id(), name: 'prod1', catg: 'catg1', cost: 100},
	{id: id(), name: 'prod2', catg: 'catg2', cost: 200},
	{id: id(), name: 'prod3', catg: 'catg3', cost: 300},

];
function id() {
  return uuid()
}

const App4 = () => {



  const [prods, setProds] = useState(initProds)
  const [obj, setObj] = useState(getInitProds())

  function getInitProds() {
    return {
      id: id(),
      name: '',
      catg: '',
      cost: '',
    }
  }


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

  function changeProd(prop, event) {
    setObj({...obj, [prop]: event.target.value})
  }

  function addItem() {
    setProds([...prods, obj])
    setObj(getInitProds())
  }

  return (
    <div className='App'>
      {result}
      <input value={obj.name} onChange={(e) => changeProd('name', e)} />
      <input value={obj.catg} onChange={(e) => changeProd('catg', e)} />
      <input value={obj.cost} onChange={(e) => changeProd('cost', e)} /> <br />
      <button onClick={addItem}>add</button>
      
    </div>
  )
}

export default App4

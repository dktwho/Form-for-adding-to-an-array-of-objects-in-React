
import React from 'react'
import { useState } from 'react';
import {v4 as uuid} from 'uuid'

const initNotes = [
	{
		id: 'GYi9G_uC4gBF1e2SixDvu',
		prop1: 'value11',
		prop2: 'value12',
		prop3: 'value13',
	},
	{
		id: 'IWSpfBPSV3SXgRF87uO74',
		prop1: 'value21',
		prop2: 'value22',
		prop3: 'value23',
	},
	{
		id: 'JAmjRlfQT8rLTm5tG2m1L',
		prop1: 'value31',
		prop2: 'value32',
		prop3: 'value33',
	},
];

function id() {
  return uuid()
}


function getInitObj() {
  return {
    id: id(),
    prop1: '',
    prop2: '',
    prop3: '',
  }
}



const App3 = () => {



  const [notes, setNotes] = useState(initNotes)
  const [obj, setObj] = useState(getInitObj())

  const result = notes.map(note => {
    return <p key={note.id}>
      <span>{note.prop1}</span>
      <span>{note.prop2}</span>
      <span>{note.prop3}</span>
    </p>
  })

  function changeProp(prop, event) {
    setObj({...obj, [prop]: event.target.value})
  }

  function addItem() {
    setNotes([...notes, obj])
    setObj(getInitObj())
  }

  console.log(notes)
  return (
    <div className='App'>
      {result}
      <input value={obj.prop1} onChange={(e) => changeProp('prop1', e)} />
      <input value={obj.prop2} onChange={(e) => changeProp('prop2', e)} />
      <input value={obj.prop3} onChange={(e) => changeProp('prop3', e)}/> <br />
      <button onClick={addItem}>save</button>
    </div>
  )
}

export default App3

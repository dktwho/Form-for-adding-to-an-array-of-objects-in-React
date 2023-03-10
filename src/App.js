import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';


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




function App() {
  const [notes, setNotes] = useState(initNotes)
  const [value1, setValue1] = useState('');
	const [value2, setValue2] = useState('');
	const [value3, setValue3] = useState('');

  const result = notes.map(note => {
    return <p key={note.id}>
      <span>{note.prop1}</span>
      <span>{note.prop2}</span>
      <span>{note.prop3}</span>
    </p>
  })

  function id() {
    return uuid()
  }

  function addItem() {
    let obj = {
      id: id(),
      prop1: value1,
      prop2: value2,
      prop3: value3,
    }
    setNotes([...notes, obj])
  }

  console.log(notes)

  return (
    <div className="App">
      {result}
      <input value={value1} onChange={(e) => setValue1(e.target.value)}  /> <br />
      <input value={value2} onChange={(e) => setValue2(e.target.value)} /> <br />
      <input value={value3} onChange={(e) => setValue3(e.target.value)} /> <br />
      <button onClick={addItem}>save</button>

    </div>
  );
}

export default App;

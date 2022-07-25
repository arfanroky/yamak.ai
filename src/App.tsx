import React from 'react';

import './App.scss';

let type:Object;
type Person = {
  name: String,
  age: Number
}

let person:Person = {
  name:'arfan',
  age: 21
}

function App() {
  return (
    <div className="App">
    <h1 className='heading'>
    {` My Name Is ${person.name}. years of ${person.age}`}
    </h1>
    </div>
  );
}

export default App;

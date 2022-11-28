import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AddCow from './components/AddCow.jsx'
import CowDetails from './components/CowDetails.jsx'
import CowList from './components/CowList.jsx'

function App() {
  const [cows, setCows] = useState(null);
  const [currentCow, setCurrentCow] = useState(null);

  console.log(currentCow);

  useEffect(() => {
    axios.get('/api/cows')
      .then((data) => {
        setCows(data.data[0]);
      })
  }, []);

  return (
    <div className="container">
      <h1>Cow List</h1>
      <div className="upper-section">
        <AddCow setCows={setCows} />
        <CowDetails currentCow={currentCow} setCurrentCow={setCurrentCow} setCows={setCows} />
      </div>
      <CowList cows={cows} setCurrentCow={setCurrentCow} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
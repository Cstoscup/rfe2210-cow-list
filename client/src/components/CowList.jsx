import React from 'react';
import CowName from './CowName.jsx';

function CowList({cows, setCurrentCow}) {
  if (cows !== null) {
    console.log(cows);
    return (
      <div>
        <h2 className="cow-name-heading">Cow Names</h2>
        <div className="cows">
          {
            cows.map((cow, index) => {
              return <CowName key={index} cow={cow} setCurrentCow={setCurrentCow} />
            })
          }
        </div>

      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default CowList;
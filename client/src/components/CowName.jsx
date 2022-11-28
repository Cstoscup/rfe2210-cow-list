import React, { useState } from 'react';

function CowName({cow, setCurrentCow}) {
  function onClick(event) {
    event.preventDefault();
    setCurrentCow(cow);
  }

  return (
    <div className="cow-name" onClick={onClick}>
      {cow.name}
    </div>
  )
}

export default CowName;
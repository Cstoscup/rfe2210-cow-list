import React from 'react';
import axios from 'axios';

function CowDetails({currentCow, setCurrentCow, setCows}) {
  function editCow(event) {
    event.preventDefault();
    currentCow.name = prompt('Edit name:', currentCow.name);
    currentCow.description = prompt('Enter description:', currentCow.description);
    axios.put('/api/cows', {id: currentCow.id, name: currentCow.name, description: currentCow.description})
      .then((data) => {
        setCows(data.data[0]);
      })
  }

  function deleteCow(event) {
    event.preventDefault();
    axios.post('/api/cows/delete', {id: currentCow.id})
      .then((data) => {
        setCurrentCow(null);
        setCows(data.data[0])
      })
  }

  if (currentCow !== null) {
    return (
      <div className="cow-details">
        <h2 className="cow-details-heading">Meet {currentCow.name}!</h2>
        <div className="cow-description-image">
          <div className="cow-edit-section">
            <p className="cow-description">{currentCow.description}</p>
            <div className="buttons">
              <button onClick={editCow}>Edit</button>
              <button onClick={deleteCow}>Delete</button>
            </div>

          </div>

          <img src={currentCow.imageURL} />
        </div>
      </div>
    )
  } else {
    return (
      <div className="cow-details">
        <h2 className="cow-details-heading">Click on a cow to learn more!</h2>
      </div>
    )
  }


}

export default CowDetails;
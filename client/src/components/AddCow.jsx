import React, { useState } from 'react';
import axios from "axios";

function AddCow({setCows}) {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);

  function saveName(event) {
    setName(event.target.value);
  }

  function saveDescription(event) {
    setDescription(event.target.value);
  }

  function submitCow(event) {
    event.preventDefault();
    console.log("Name: ", name);
    console.log("Description: ", description);
    axios.post('/api/cows', {name: name, description: description})
      .then((response) => {
        setCows(response.data[0]);
      })
  }

  return (
    <div className="add-cow-container">
      <h2>Add a cow:</h2>
      <form className="add-cow-form">
        <label>
          <span className="label">Name:</span>
          <input type="text" onChange={saveName} />
        </label>
        <label>
          <span className="label">Description:</span>
          <textarea onChange={saveDescription} />
        </label>
        <input type="submit" value="Add" onClick={submitCow} />
      </form>
    </div>
  )
}

export default AddCow;
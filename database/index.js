const mysql = require('mysql2');
const axios = require('axios');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'XhetA372!',
  database: 'cowlist'
});

connection.connect((err) => {
  if (err) {
    console.log('BLAH', err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Your Database Queries Here!!
function addCow(cow, callback) {
  axios.get('https://pixabay.com/api/?key=31630977-751828526d7f2b77f294ddb4c&q=cow&image_type=photo&per_page=200')
  .then((data) => {
    var cowPhoto = data.data.hits[Math.floor(Math.random() * 200)].webformatURL;
    console.log("PHOTO: ", cowPhoto);
    connection.promise().query('INSERT INTO cows (name, description, imageURL) VALUES (?, ?, ?)', [cow.name, cow.description, cowPhoto])
    .then((response) => {
      connection.promise().query('SELECT * FROM cows')
        .then((cows) => {
          callback(cows);
        })
    })
  })

    // .then(() => { connection.end() })
}

function getAllCows(callback) {
  connection.promise().query('SELECT * FROM cows')
    .then((cows) => {
      callback(cows);
    })
}

function editCow(cow, callback) {
  connection.promise().query('UPDATE cows SET name = ?, description = ? WHERE id = ?', [cow.name, cow.description, cow.id])
    .then((response) => {
      connection.promise().query('SELECT * FROM cows')
        .then((cows) => {
          callback(cows);
        })
    })
}

function deleteCow(cow, callback) {
  connection.promise().query('DELETE FROM cows WHERE id = ?', [cow.id])
  .then((response) => {
    connection.promise().query('SELECT * FROM cows')
      .then((cows) => {
        callback(cows);
      })
  })
}




// Don't forget to export your functions!
module.exports = {
  addCow: addCow,
  getAllCows: getAllCows,
  editCow: editCow,
  deleteCow: deleteCow
};

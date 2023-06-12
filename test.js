const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blood_bank"
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');

  // Perform the SELECT query
  const query = 'SELECT * FROM donors';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error executing the query:', error);
      return;
    }

    // Process the query results
    console.log('Query results:', results);

    // Close the database connection
    connection.end((endErr) => {
      if (endErr) {
        console.error('Error closing the database connection:', endErr);
        return;
      }
      console.log('Connection closed.');
    });
  });
});

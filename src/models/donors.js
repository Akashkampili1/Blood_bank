const db = require('../db');

class Donor {
  static getAllDonors() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM donors';
      db.query(query, (error, results) => {
        if (error) {
          console.error('Error executing the query:', error);
          reject(error);
          return;
        }
        resolve(results);
      })})};

 

      static getDonorById(donorId) {
        return new Promise((resolve, reject) => {
          const query = 'SELECT * FROM donors WHERE donor_id = ?';
          db.query(query, [donorId], (error, results) => {
            if (error) {
              console.error('Error executing the query:', error);
              reject(error);
              return;
            }
            resolve(results);
          });
        });
      }
      

      

  static createDonor(donorData) {
    return db.query('INSERT INTO Donors SET ?', [donorData]);
  }

  static updateDonor(donorId, donorData) {
    return db.query('UPDATE Donors SET ? WHERE donor_id = ?', [donorData, donorId]);
  }

  static deleteDonor(donorId) {
    return db.query('DELETE FROM Donors WHERE donor_id = ?', [donorId]);
  }
}

module.exports = Donor;

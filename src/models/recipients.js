const db = require('../db');

class Recipient {
  static getAllRecipients() {
    return db.query('SELECT * FROM Recipient');
  }

  static getRecipientById(recipientId) {
    return db.query('SELECT * FROM Recipient WHERE recipient_id = ?', [recipientId]);
  }

  static createRecipient(recipientData) {
    return db.query('INSERT INTO Recipient SET ?', [recipientData]);
  }

  static updateRecipient(recipientId, recipientData) {
    return db.query('UPDATE Recipient SET ? WHERE recipient_id = ?', [recipientData, recipientId]);
  }

  static deleteRecipient(recipientId) {
    return db.query('DELETE FROM Recipient WHERE recipient_id = ?', [recipientId]);
  }
}

module.exports = Recipient;

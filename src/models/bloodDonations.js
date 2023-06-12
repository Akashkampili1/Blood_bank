const db = require('../db');

class BloodDonation {
  static createBloodDonation(donationData) {
    return db.query('INSERT INTO BloodDonations SET ?', [donationData]);
  }

  static getBloodDonationById(donationId) {
    return db.query('SELECT * FROM BloodDonations WHERE donation_id = ?', [donationId]);
  }

  static updateBloodDonation(donationId, donationData) {
    return db.query('UPDATE BloodDonations SET ? WHERE donation_id = ?', [donationData, donationId]);
  }

  static deleteBloodDonation(donationId) {
    return db.query('DELETE FROM BloodDonations WHERE donation_id = ?', [donationId]);
  }
}

module.exports = BloodDonation;

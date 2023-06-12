const db = require('../db');

class BloodTransfusion {
  static createBloodTransfusion(transfusionData) {
    return db.query('INSERT INTO BloodTransfusions SET ?', [transfusionData]);
  }

  static getBloodTransfusionById(transfusionId) {
    return db.query('SELECT * FROM BloodTransfusions WHERE transfusion_id = ?', [transfusionId]);
  }

  static updateBloodTransfusion(transfusionId, transfusionData) {
    return db.query('UPDATE BloodTransfusions SET ? WHERE transfusion_id = ?', [transfusionData, transfusionId]);
  }

  static deleteBloodTransfusion(transfusionId) {
    return db.query('DELETE FROM BloodTransfusions WHERE transfusion_id = ?', [transfusionId]);
  }
}

module.exports = BloodTransfusion;

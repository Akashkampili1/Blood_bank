const db = require('../db');

class BloodInventory {
  static getBloodInventory() {
    return db.query('SELECT * FROM BloodInventory');
  }

  static getBloodUnitById(unitId) {
    return db.query('SELECT * FROM BloodInventory WHERE inventory_id = ?', [unitId]);
  }

  static createBloodUnit(unitData) {
    return db.query('INSERT INTO BloodInventory SET ?', [unitData]);
  }

  static updateBloodUnit(unitId, unitData) {
    return db.query('UPDATE BloodInventory SET ? WHERE inventory_id = ?', [unitData, unitId]);
}

static deleteBloodUnit(unitId) {
return db.query('DELETE FROM BloodInventory WHERE inventory_id = ?', [unitId]);
}
}

module.exports = BloodInventory;

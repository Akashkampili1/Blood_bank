const BloodInventory = require('../models/bloodInventory');

class BloodInventoryController {
  static async getBloodInventory(req, res) {
    try {
      const inventory = await BloodInventory.getBloodInventory();
      res.json(inventory);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async getBloodUnitById(req, res) {
    const unitId = req.params.id;

    try {
      const unit = await BloodInventory.getBloodUnitById(unitId);

      if (unit.length === 0) {
        res.status(404).json({ error: 'Blood unit not found' });
      } else {
        res.json(unit[0]);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async createBloodUnit(req, res) {
    const unitData = req.body;

    try {
      const result = await BloodInventory.createBloodUnit(unitData);
      res.json({ message: 'Blood unit created successfully', unitId: result.insertId });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async updateBloodUnit(req, res) {
    const unitId = req.params.id;
    const unitData = req.body;

    try {
      await BloodInventory.updateBloodUnit(unitId, unitData);
      res.json({ message: 'Blood unit updated successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async deleteBloodUnit(req, res) {
    const unitId = req.params.id;

    try {
      await BloodInventory.deleteBloodUnit(unitId);
      res.json({ message: 'Blood unit deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = BloodInventoryController;

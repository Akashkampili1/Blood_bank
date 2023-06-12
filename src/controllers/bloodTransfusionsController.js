const BloodTransfusion = require('../models/bloodTransfusions');

class BloodTransfusionsController {
  static async createBloodTransfusion(req, res) {
    const transfusionData = req.body;

    try {
      const result = await BloodTransfusion.createBloodTransfusion(transfusionData);
      res.json({ message: 'Blood transfusion created successfully', transfusionId: result.insertId });
    } catch (err) {
     console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async getBloodTransfusionById(req, res) {
    const transfusionId = req.params.id;

    try {
      const transfusion = await BloodTransfusion.getBloodTransfusionById(transfusionId);

      if (transfusion.length === 0) {
        res.status(404).json({ error: 'Blood transfusion not found' });
      } else {
        res.json(transfusion[0]);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async updateBloodTransfusion(req, res) {
    const transfusionId = req.params.id;
    const transfusionData = req.body;

    try {
      await BloodTransfusion.updateBloodTransfusion(transfusionId, transfusionData);
      res.json({ message: 'Blood transfusion updated successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async deleteBloodTransfusion(req, res) {
    const transfusionId = req.params.id;

    try {
      await BloodTransfusion.deleteBloodTransfusion(transfusionId);
      res.json({ message: 'Blood transfusion deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = BloodTransfusionsController;


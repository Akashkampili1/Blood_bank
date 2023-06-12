const Donor = require('../models/donors');

class DonorsController {
  static async getAllDonors(req, res) {
    try {
      const donors = await Donor.getAllDonors();
      res.json(donors);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async getDonorById(req, res) {
    const donorId = req.params.id;
  
    try {
      const donor = await Donor.getDonorById(donorId);
  
      if (donor.length === 0) {
        res.status(404).json({ error: 'Donor not found' });
      } else {
        res.json(donor[0]);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  

  static async createDonor(req, res) {
    const donorData = req.body;

    try {
      const result = await Donor.createDonor(donorData);
      res.json({ message: 'Donor created successfully', donorId: result.insertId });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async updateDonor(req, res) {
    const donorId = req.params.id;
    const donorData = req.body;

    try {
      await Donor.updateDonor(donorId, donorData);
      res.json({ message: 'Donor updated successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async deleteDonor(req, res) {
    const donorId = req.params.id;

    try {
      await Donor.deleteDonor(donorId);
      res.json({ message: 'Donor deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = DonorsController;

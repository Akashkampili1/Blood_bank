const BloodDonation = require('../models/bloodDonations');

class BloodDonationsController {
  static async createBloodDonation(req, res) {
    const donationData = req.body;

    try {
      const result = await BloodDonation.createBloodDonation(donationData);
      res.json({ message: 'Blood donation created successfully', donationId: result.insertId });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async getBloodDonationById(req, res) {
    const donationId = req.params.id;

    try {
      const donation = await BloodDonation.getBloodDonationById(donationId);

      if (donation.length === 0) {
        res.status(404).json({ error: 'Blood donation not found' });
      } else {
        res.json(donation[0]);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async updateBloodDonation(req, res) {
    const donationId = req.params.id;
    const donationData = req.body;

    try {
      await BloodDonation.updateBloodDonation(donationId, donationData);
      res.json({ message: 'Blood donation updated successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async deleteBloodDonation(req, res) {
    const donationId = req.params.id;

    try {
      await BloodDonation.deleteBloodDonation(donationId);
      res.json({ message: 'Blood donation deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = BloodDonationsController;

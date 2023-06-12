const Recipient = require('../models/recipients');

class RecipientsController {
  static async getAllRecipients(req, res) {
    try {
      const recipients = await Recipient.getAllRecipients();
      res.json(recipients);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async getRecipientById(req, res) {
    const recipientId = req.params.id;

    try {
      const recipient = await Recipient.getRecipientById(recipientId);

      if (recipient.length === 0) {
        res.status(404).json({ error: 'Recipient not found' });
      } else {
        res.json(recipient[0]);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async createRecipient(req, res) {
    const recipientData = req.body;

    try {
      const result = await Recipient.createRecipient(recipientData);
      res.json({ message: 'Recipient created successfully', recipientId: result.insertId });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async updateRecipient(req, res) {
    const recipientId = req.params.id;
    const recipientData = req.body;

    try {
      await Recipient.updateRecipient(recipientId, recipientData);
      res.json({ message: 'Recipient updated successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async deleteRecipient(req, res) {
    const recipientId = req.params.id;

    try {
      await Recipient.deleteRecipient(recipientId);
      res.json({ message: 'Recipient deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = RecipientsController;

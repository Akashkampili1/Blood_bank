const express = require('express');
const router = express.Router();

const bloodDonationsController = require('../controllers/bloodDonationsController');
const bloodInventoryController = require('../controllers/bloodInventoryController');
const recipientsController = require('../controllers/recipientsController');
const bloodTransfusionsController = require('../controllers/bloodTransfusionsController');
const donorsController = require('../controllers/donorsController');

// Blood Donations routes
router.post('/blood-donations', bloodDonationsController.createBloodDonation);
router.get('/blood-donations/:id', bloodDonationsController.getBloodDonationById);
router.put('/blood-donations/:id', bloodDonationsController.updateBloodDonation);
router.delete('/blood-donations/:id', bloodDonationsController.deleteBloodDonation);

// Blood Inventory routes
router.get('/blood-inventory', bloodInventoryController.getBloodInventory);
router.get('/blood-inventory/:id', bloodInventoryController.getBloodUnitById);
router.post('/blood-inventory', bloodInventoryController.createBloodUnit);
router.put('/blood-inventory/:id', bloodInventoryController.updateBloodUnit);
router.delete('/blood-inventory/:id', bloodInventoryController.deleteBloodUnit);

// Recipients routes
router.get('/recipients', recipientsController.getAllRecipients);
router.get('/recipients/:id', recipientsController.getRecipientById);
router.post('/recipients', recipientsController.createRecipient);
router.put('/recipients/:id', recipientsController.updateRecipient);
router.delete('/recipients/:id', recipientsController.deleteRecipient);

// Blood Transfusions routes
router.post('/blood-transfusions', bloodTransfusionsController.createBloodTransfusion);
router.get('/blood-transfusions/:id', bloodTransfusionsController.getBloodTransfusionById);
router.put('/blood-transfusions/:id', bloodTransfusionsController.updateBloodTransfusion);
router.delete('/blood-transfusions/:id', bloodTransfusionsController.deleteBloodTransfusion);

// Donors routes
router.get('/donors', donorsController.getAllDonors);
router.get('/donors/:id', donorsController.getDonorById);
router.post('/donors', donorsController.createDonor);
router.put('/donors/:id', donorsController.updateDonor);
router.delete('/donors/:id', donorsController.deleteDonor);

module.exports = router;

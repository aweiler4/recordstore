const express = require('express');
const router = express.Router();
const Record = require('../model/Record')
const recordsController = require('../controllers/records-controller')


router.get('/', recordsController.getAllRecords);
router.post('/', recordsController.addRecord);
router.get('/:id', recordsController.getById);
router.put('/:id', recordsController.updateRecord)
router.delete('/:id', recordsController.deleteRecord)

module.exports = router;
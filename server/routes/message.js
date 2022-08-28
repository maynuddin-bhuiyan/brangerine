const express = require('express');

const message = require('../controllers/message.js');

const router = express.Router();

// router.get('/', message.getMassage);
router.post('/', message.addMassage);
router.delete('/:id', message.deleteMassage);

module.exports = router;

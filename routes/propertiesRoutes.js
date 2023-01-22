const express = require('express');
const {
  getPropertiesData,
  getPropertiesImages,
  getSinglePropertyData,
} = require('../controllers/propertiesControllers');

const router = express.Router();

router.get('/', getPropertiesData);
router.get('/images', getPropertiesImages);
router.get('/:id', getSinglePropertyData);

module.exports = router;
